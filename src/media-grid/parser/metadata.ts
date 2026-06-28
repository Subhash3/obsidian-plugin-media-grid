import { DEFAULT_CONFIG } from "../../config/plugin-config.js";
import { regex } from "../../config/regex.js";

export function checkForColumns(line: string): number | null {
    const match = regex.cols.exec(line);

    if (!match) {
        return null;
    }

    const columns = match[1];
    if (!columns) {
        return DEFAULT_CONFIG.cols;
    }

    const columns_n = Number(columns);
    return columns_n ?? DEFAULT_CONFIG.cols;
}

export function checkForGap(line: string): number | null {
    const match = regex.gap.exec(line);

    if (!match) {
        return null;
    }

    const gap = match[1];
    if (!gap) {
        return DEFAULT_CONFIG.gap;
    }

    const gap_n = Number(gap);
    return gap_n ?? DEFAULT_CONFIG.gap;
}

export function checkForGridContainerId(line: string): string | null {
    const match = regex.gridContainerId.exec(line);

    if (!match) {
        return null;
    }

    const id = match[1];

    if (!id) {
        return '';
    }

    return id;
}
