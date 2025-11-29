"use strict";
// This shows the plugin UI
figma.showUI(__html__, { width: 500, height: 400 });
// Listen for messages from the UI
figma.ui.onmessage = async (msg) => {
    if (msg.type === 'create-text') {
        // Load the font before creating text
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        // Create a text node
        const text = figma.createText();
        // Set the text content
        text.characters = "Hello World";
        // Set the font size
        text.fontSize = 48;
        // Position the text in the center of the viewport
        text.x = figma.viewport.center.x - (text.width / 2);
        text.y = figma.viewport.center.y - (text.height / 2);
        // Add the text to the current page
        figma.currentPage.appendChild(text);
        // Select the created text
        figma.currentPage.selection = [text];
        // Zoom to fit the text in view
        figma.viewport.scrollAndZoomIntoView([text]);
        // Notify the UI
        figma.ui.postMessage({ type: 'text-created' });
    }
    if (msg.type === 'close') {
        figma.closePlugin();
    }
};
