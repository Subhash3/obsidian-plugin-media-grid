import { DEFAULT_IMAGE_SIZE } from "../../config/plugin-config.js";
import { regex } from "../../config/regex.js";
import type { MediaType } from "../../types.js";

export interface MediaDetectionResult {
    type: MediaType;
    filename: string;
    size: number;
}

const imageExtensions = ['jpg', 'jpeg', 'png', 'webp'];
const videoExtensions = ['mp4'];

function getMediaType(ext: string): MediaType {
    if (imageExtensions.includes(ext)) return 'image';
    if (videoExtensions.includes(ext)) return 'video';
    return 'unknown';
}

export function checkForMedia(line: string): MediaDetectionResult | null {
    const match = regex.media.exec(line);

    // Not a media file
    if (!match) return null;

    const filename = match[1];

    // Yes media, but not valid filename
    if (!filename) {
        return {
            type: 'unknown',
            filename: '',
            size: 0
        }
    }

    const extension = match[2];
    // Validate extension if required
    if (!extension) {
        return {
            type: 'unknown',
            filename: '',
            size: 0
        }
    }

    const mediaType = getMediaType(extension);
    const sizeWithPipe = match[3];
    const size = sizeWithPipe ? Number(sizeWithPipe.substring(1)) : DEFAULT_IMAGE_SIZE;

    return {
        type: mediaType,
        filename,
        size
    }
}