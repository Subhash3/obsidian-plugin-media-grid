import { DEFAULT_CONFIG } from "../../config/plugin-config.js";
import { regex } from "../../config/regex.js";
import { Logger } from "../../logger.js";

const logger = Logger.getInstance()

export function checkForColumns(line: string): number | null {
    const match = regex.cols.exec(line);
    // logger.log(match)

    if (!match) {
        return null;
    }

    const columns = match[1];
    if (!columns) {
        return DEFAULT_CONFIG.cols;
    }

    return Number(columns) ?? DEFAULT_CONFIG.cols;
}

export function checkForGap(line: string): number | null {
    const match = regex.gap.exec(line);
    // logger.log(match)

    if (!match) {
        return null;
    }

    const gap = match[1];
    if (!gap) {
        return DEFAULT_CONFIG.gap;
    }

    return Number(gap) ?? DEFAULT_CONFIG.gap;
}

export function checkForGridContainerId(line: string): string | null {
    logger.log("checkForGridContainerId");
    const match = regex.gridContainerId.exec(line);
    console.log(match);

    if(!match) {
        return null;
    }

    const id = match[1];

    if(!id) {
        return '';
    }

    return id;
}
