import type { App, MarkdownPostProcessorContext } from "obsidian";
import { parseSource } from "./parser/parse-source.js";
import { createCallout } from "../utils/create-callout.js";
import { createMediaElement } from "../utils/create-media.js";
import type { MediaGridConfig } from "../config/plugin-config.js";

export function getMediaGridProcessor(app: App) {
    return function mediaGridProcessor(source: string, container: HTMLElement, ctx: MarkdownPostProcessorContext) {
        const { config, syntaxErrors } = parseSource(source);

        container.replaceChildren();

        if (syntaxErrors.length > 0) {
            const warningsDiv = container.createDiv({ cls: 'media-grid-syntax-errors' })

            const error = syntaxErrors.join("\n");
            const callOut = createCallout("media-grid syntax error", error, 'warning');
            warningsDiv.append(callOut);
        }

        if(config.cols) {
            renderGrid(app, container, config);
        } else {
            renderFlexbox(app, container, config);
        }
    }
}

function renderGrid(app: App, container: HTMLElement, config: MediaGridConfig) {
    const grid = container.createDiv({ cls: 'media-grid-container grid' });
    grid.id = config.gridContainerId;
    grid.style.gridTemplateColumns = `repeat(${config.cols}, 1fr)`
    grid.style.gap = `${config.gap}px`;

    for (const row of config.rows) {
        for (let file of row) {
            const resourceLink = getResourceLinkFromFileName(app, file.filename);

            const gridCell = grid.createDiv({ cls: 'media-grid-cell' });
            const mediaEl = createMediaElement(resourceLink, file);
            gridCell.append(mediaEl);
            grid.append(gridCell);
        }
    }
}

function renderFlexbox(app: App, container: HTMLElement, config: MediaGridConfig) {
    const grid = container.createDiv({ cls: 'media-grid-container flex' });
    grid.id = config.gridContainerId;
    grid.style.gap = `${config.gap}px`;

    for (const row of config.rows) {
        const gridRow = grid.createDiv({ cls: 'media-grid-row' })
        gridRow.style.gap = `${config.gap}px`;

        for (let file of row) {
            const resourceLink = getResourceLinkFromFileName(app, file.filename);

            const gridCell = grid.createDiv({ cls: 'media-grid-cell' });
            const mediaEl = createMediaElement(resourceLink, {
                ...file,
                size: 0
            });
            gridCell.append(mediaEl);
            gridRow.append(gridCell);
        }
        grid.appendChild(gridRow);
    }
}

function getResourceLinkFromFileName(app: App, filename: string): string {
    const activeFile = app.workspace.getActiveFile();
    if (!activeFile) return '';
    const file = app.metadataCache.getFirstLinkpathDest(filename, activeFile.path);

    if (file) {
        const url = app.vault.getResourcePath(file);
        return url;
    }

    return '';
}
