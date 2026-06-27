import { App, Plugin, type PluginManifest } from 'obsidian'
import { Logger } from './logger.js'

const logger = Logger.getInstance();

export class MediaGridPlugin extends Plugin {
    constructor(app: App, manifest: PluginManifest) {
        super(app, manifest);
    }

    onload(): Promise<void> | void {
        logger.log("Onload");
    }
}