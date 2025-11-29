# UX Copywriter - Figma Plugin

A Figma plugin built with React + TypeScript + Vite that provides a modern UI for creating and managing text content in Figma.

## Features

- 🎨 Built with React and TypeScript
- ⚡ Fast development with Vite and HMR
- 📦 Single-file build optimized for Figma
- 🎯 Interactive UI with real-time updates

## Development

### Prerequisites

- Node.js (latest LTS version recommended)
- Figma Desktop App

### Setup

1. Install dependencies:

```bash
npm install
```

2. Build the plugin:

```bash
npm run build
```

The built files will be in the `dist/` folder.

### Using in Figma

1. Open Figma Desktop App
2. Go to **Plugins** → **Development** → **Import plugin from manifest...**
3. Select `dist/manifest.json` from this project
4. Run the plugin: **Plugins** → **Development** → **Hello World Plugin**

### Development Workflow

- `npm run dev` - Start Vite dev server (for UI development)
- `npm run build` - Build the plugin for production
- `npm run lint` - Lint the code

The plugin uses `vite-plugin-singlefile` to bundle all JS and CSS into a single HTML file that works in Figma's iframe environment.

## Project Structure

```
src/
  ├── App.tsx          # Main React component
  ├── main.tsx         # React entry point
  ├── App.css          # Component styles
  └── assets/          # Static assets

public/
  └── manifest.json    # Figma plugin manifest

dist/                  # Built plugin files
  ├── manifest.json
  ├── index.html       # Single-file React bundle
  └── vite.svg
```

## Technology Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **@vitejs/plugin-react-swc** - Fast Refresh with SWC
- **vite-plugin-singlefile** - Bundle everything into one HTML file
- **Figma Plugin API** - Plugin functionality
