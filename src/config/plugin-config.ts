export interface MediaGridConfig {
    cols: number;
    gap: number;
    gridContainerId: string;
    files: Array<{ filename: string, size: number }>
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