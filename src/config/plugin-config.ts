import type { MediaType } from "../types.js";

export interface MediaFile {
    filename: string;
    mediaType: MediaType;
    size: number;
}

export interface MediaGridConfig {
    cols: number | null;
    gap: number;
    gridContainerId: string;
    rows: MediaFile[][]
}

export const DEFAULT_CONFIG: MediaGridConfig = {
    cols: null,
    gap: 4,
    gridContainerId: '',
    rows: []
}

export function createDefaultConfig(): MediaGridConfig {
    return {
        cols: null,
        gap: 4,
        gridContainerId: '',
        rows: []
    }
}

export const DEFAULT_IMAGE_SIZE = 300;