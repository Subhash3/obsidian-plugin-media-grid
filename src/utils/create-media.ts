import type { MediaFile } from "../config/plugin-config.js";
import { createCallout } from "./create-callout.js";

export function createMediaElement(resourceLink: string, file: MediaFile) {
    switch (file.mediaType) {
        case 'image':
            return createImg(resourceLink, file);
        case 'video':
            return createVideo(resourceLink, file)
        case 'unknown':
            return createCallout("Unsupported media", file.filename, 'bug');
    }
}

function createImg(resourceLink: string, file: MediaFile): HTMLImageElement {
    const img = document.createElement('img');
    img.src = resourceLink
    img.alt = file.filename;
    img.width = file.size;

    return img;
}

function createVideo(resourseLink: string, file: MediaFile): HTMLVideoElement {
    const video = document.createElement('video');
    video.controls = true;
    video.src = resourseLink;
    video.width = file.size;

    return video;
}