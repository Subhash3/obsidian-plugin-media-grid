import type { App, MarkdownPostProcessorContext } from "obsidian";
import { parseSource } from "./parser/parse-source.js";
import { Logger } from "../logger.js";

const logger = Logger.getInstance();
export function getMediaGridProcessor(app: App) {
    return function mediaGridProcessor(source: string, container: HTMLElement, ctx: MarkdownPostProcessorContext) {
        logger.log("mediaGridProcessor");
        const config = parseSource(source);
        console.log({config})

        container.innerHTML = '';
        const grid = container.createDiv({ cls: 'media-grid-container' });
        grid.id = config.gridContainerId;
        grid.style.display = 'grid';
        grid.style.gridTemplateColumns = `repeat(${config.cols}, 1fr)`
        grid.style.gap = `${config.gap}px`;

        for (let file of config.files) {
            const gridCell = grid.createDiv({ cls: 'media-grid-cell' });
            const img = document.createElement('img');
            img.src = getResourceLinkFromFileName(app, file.filename);
            img.alt = file.filename;

            gridCell.append(img);
            grid.append(gridCell);
        }
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
