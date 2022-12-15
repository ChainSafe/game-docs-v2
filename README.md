# Gaming SDK v2 Documentation

This repository holds the source Markdown files for the [Gaming SDK v2 Documentation](https://docs.gaming.chainsafe.io/).

Documentation is built using [Docusaurus 2](https://docusaurus.io/), a modern static docs generator.

# Dependencies

This project requires `yarn`. You can find installation instructions [here](https://yarnpkg.com/getting-started/install).

# Running Locally

Fetch project dependencies:
```
$ yarn
```
Start development server:
```
$ yarn start
```

This command starts a local development server (localhost:3000) and opens up a browser window. Most changes are reflected live without having to restart the server.

# Spellcheck
```
yarn spellcheck
```
You can add unknown words to `dictionary.txt`. Please do not forget to sort all the line alphabetically. The easiest way to do so is to select all the line and call `Sort Line Ascending` command in VSCode command palette.

# Building

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

This command is called be the automatic deployment script of this repository and content of a `build/` folder uploaded to the Cloudflare Page.

# Contributing

All contributions are welcomed! This is intended to be a living document and requires contributions of many to be maintained.

Please use GitHub Issues to propose any large changes and to facilitate discussion and questions regarding content and structure.

It is recommended you review the [Docusaurus docs](https://docusaurus.io/docs) to ensure you utilize its features correctly.

After making a PR you can see URL of the Preview deployment in the Checks section, so you can validate that 

# Project Structure

`docs/` -- All the pages of the documentation live here. They are numbered only for convenient reasons, order is defined by the `sidebar_position` value in the page header.

`docs/assets/` -- Folder for all the images used in docs.

`static/` -- Web-ready assets such as icons (will not be bundled with webpack)

