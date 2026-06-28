export function createCallout(title: string, content: string, variant = 'info') {
    const calloutDiv = activeDocument.createElement('div');
    calloutDiv.classList.add('callout');
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

    contentDiv.replaceChildren(content);

    calloutDiv.append(contentDiv);

    return calloutDiv;
}   