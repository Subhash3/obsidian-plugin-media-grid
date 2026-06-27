import { App, Plugin, type PluginManifest } from 'obsidian'
import { Logger } from '../logger.js';
import { getMediaGridProcessor } from './media-grid-processor.js';

const logger = Logger.getInstance();

export class MediaGridPlugin extends Plugin {
    constructor(app: App, manifest: PluginManifest) {
        super(app, manifest);
    }

    onload(): Promise<void> | void {
        logger.log("Onload");

        this.registerMarkdownCodeBlockProcessor('media-grid', getMediaGridProcessor(this.app), 0)
    }
}