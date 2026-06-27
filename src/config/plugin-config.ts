import type { MediaType } from "../types.js";

export interface MediaFile {
    filename: string;
    mediaType: MediaType;
    size: number;
}

export interface MediaGridConfig {
    cols: number;
    gap: number;
    gridContainerId: string;
    files: Array<MediaFile>
}

export const DEFAULT_CONFIG: MediaGridConfig = {
    cols: 4,
    gap: 4,
    gridContainerId: '',
    files: []
}

export function createDefaultConfig(): MediaGridConfig {
    return {
        cols: 4,
        gap: 4,
        gridContainerId: '',
        files: []
    }
}

export const DEFAULT_IMAGE_SIZE = 300;