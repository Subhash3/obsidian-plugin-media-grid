import { type MediaGridConfig, createDefaultConfig } from "../../config/plugin-config.js";
import { Logger } from "../../utils/logger.js";
import { checkForMedia } from "./media.js";
import { checkForColumns, checkForGap, checkForGridContainerId } from "./metadata.js";

const logger = Logger.getInstance();

export function parseSource(source: string): { config: MediaGridConfig, syntaxErrors: string[] } {
    const lines = source.split('\n');
    const config: MediaGridConfig = createDefaultConfig();
    const syntaxErrors = [];

    for (let line of lines) {
        if (!line) {
            // empty line
            continue;
        }
        const mediaDetectionResult = checkForMedia(line);
        if (mediaDetectionResult) {
            config.files.push({
                filename: mediaDetectionResult.filename,
                mediaType: mediaDetectionResult.type,
                size: mediaDetectionResult.size
            });
            continue;
        }

        const colDetectionResult = checkForColumns(line);
        if (colDetectionResult) {
            config.cols = colDetectionResult;
            continue;
        }

        const gapDetectionResult = checkForGap(line);
        if (gapDetectionResult) {
            config.gap = gapDetectionResult;
            continue;
        }

        const gridContainerIdDetectionResult = checkForGridContainerId(line);
        if (gridContainerIdDetectionResult) {
            config.gridContainerId = gridContainerIdDetectionResult;
            continue;
        }

        logger.warn(`Invalid Syntax. Could not parse "${line}"`);
        syntaxErrors.push(`Could not parse "${line}"`)
    }

    return {
        config, syntaxErrors
    }
}