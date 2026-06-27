export function createCallout(root: HTMLElement, title: string, content: string, variant = 'info') {
    const calloutDiv = root.createEl('div', { cls: 'callout' });
    calloutDiv.setAttribute('data-callout', variant);

    const titleDiv = calloutDiv.createEl('div', { cls: 'callout-title' });
    titleDiv.createEl('div', {
        cls: 'callout-icon',
    });
    titleDiv.createEl('div', {
        cls: 'callout-title-inner',
        text: title
    });

    const contentDiv = calloutDiv.createEl('div', {
        cls: 'callout-content',
    });

    contentDiv.innerHTML = content;

    calloutDiv.append(contentDiv);

    return calloutDiv;
}   