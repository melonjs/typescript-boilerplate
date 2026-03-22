# melonJS TypeScript Boilerplate
![melonJS Logo](https://github.com/melonjs/melonJS/raw/master/media/Banner/Banner%20-%20Billboard%20-%20Original%20Logo%20-%20horizontal.png)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A simple TypeScript + Vite boilerplate to create games with [melonJS](https://github.com/melonjs/melonJS).

Built with:
- [melonJS 2](https://github.com/melonjs/melonJS) — lightweight HTML5 game engine
- [TypeScript](https://www.typescriptlang.org) — type-safe JavaScript
- [Vite](https://vitejs.dev) — fast dev server and bundler
- melonJS [debug plugin](https://github.com/melonjs/debug-plugin) — auto-loaded in development mode

## Prerequisites

Ensure you have [Node.js](http://nodejs.org/) installed, then install dependencies:

    npm install

## Usage

- `npm run dev` — start the dev server at `localhost:5173`
- `npm run build` — generate a production build in the `dist` folder
- `npm run preview` — preview the production build locally

If everything goes well, you should see this:

![boilerplate-helloworld](https://user-images.githubusercontent.com/4033090/134762171-6e1fac3d-8b41-4665-890b-daa217ba61dc.png)

## Folder structure

```
src/
├── data/                  # game assets
│   ├── bgm/               # background music
│   ├── fnt/               # bitmap fonts
│   ├── img/               # images and spritesheets
│   ├── map/               # Tiled map files
│   └── sfx/               # sound effects
├── scripts/
│   ├── renderables/       # game objects (player, enemies, etc.)
│   └── stage/             # game screens (title, play, etc.)
├── index.ts               # entry point
├── index.css              # base styles
└── manifest.ts            # asset list for the melonJS preloader
```

## Prefer JavaScript?

This boilerplate works with plain JavaScript too. Just rename `.ts` files to `.js` — TypeScript is optional, not required. Vite handles both seamlessly.

## Debug Plugin

The boilerplate includes the melonJS [debug plugin](https://github.com/melonjs/debug-plugin), which is automatically loaded in development mode.

The debug panel is hidden by default and can be toggled with the **S** key. See the [plugin docs](https://github.com/melonjs/debug-plugin/blob/main/README.md) for details.

## Need Help?

- [Discord](https://discord.gg/aur7JMk) — chat with the community
- [Forum](https://melonjs.discourse.group) — ask questions
- [API Docs](https://melonjs.github.io/melonJS/) — full API reference
- [Wiki](https://github.com/melonjs/melonJS/wiki) — tutorials and guides

## Credits

- Thank you [@edmundg](https://github.com/edmundg) for the original TypeScript x Vite boilerplate
