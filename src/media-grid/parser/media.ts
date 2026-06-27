import { DEFAULT_IMAGE_SIZE } from "../../config/plugin-config.js";
import { regex } from "../../config/regex.js";

export interface MediaDetectionResult {
    filename: string;
    size: number;
}

export function checkForMedia(line: string): MediaDetectionResult | null {
    const match = regex.media.exec(line);

    // Not an image
    if (!match) return null;

    const filename = match[1];

    // Yes image, but not valid filename
    if (!filename) {
        return {
            filename: '',
            size: 0
        }
    }

    const extension = match[2];
    // Validate extension if required

    const sizeWithPipe = match[3];
    const size = sizeWithPipe ? Number(sizeWithPipe.substring(1)) : DEFAULT_IMAGE_SIZE;

    return {
        filename,
        size
    }
}