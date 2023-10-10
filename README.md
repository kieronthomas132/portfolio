# My React Portfolio

Welcome to my React portfolio! This repository showcases my projects developed using React. Below, you'll find a list of my featured projects, along with live demos and links to their source code.

## Featured Projects

### Spotify Clone
Description: A Spotify Clone project that mimics the interface and functionality of the Spotify app.

Live Demo: [Spotify Clone Live Demo](https://spotify-clone-rho-pearl.vercel.app/)
GitHub Repository: [Spotify Clone GitHub Repository](https://github.com/kieronthomas132/spotify_clone)

### Homeland - Real Estate Site
Description: A real estate website that allows users to browse and search for properties.

Live Demo: [Homeland Live Demo](https://homeland-real-estate-mu.vercel.app/)
GitHub Repository: [Homeland GitHub Repository](https://github.com/kieronthomas132/homeland)


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
