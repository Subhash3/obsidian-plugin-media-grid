import type { MediaFile } from "../config/plugin-config.js";
import { createCallout } from "./create-callout.js";

export function createMediaElement(resourceLink: string, file: MediaFile) {
    switch (file.mediaType) {
        case 'image':
            return createImg(resourceLink, file.filename);
        case 'video':
            return createVideo(resourceLink, file.filename)
        case 'unknown':
            return createCallout("Unsupported media", file.filename, 'bug');
    }
}

function createImg(resourceLink: string, filename: string): HTMLImageElement {
    const img = document.createElement('img');
    img.src = resourceLink
    img.alt = filename;

    return img;
}

function createVideo(resourseLink: string, filename: string): HTMLVideoElement {
    const video = document.createElement('video');
    video.controls = true;
    video.src = resourseLink;

    return video;
}