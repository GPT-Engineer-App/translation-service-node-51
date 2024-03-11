# translation-service-node

A translation service application using Node.js. This application includes three main functionalities:
1. Fetching locale information based on a specified language (lng) and namespace (ns) from the route "/locales/:lng/:ns.json", and responding with JSON data from the database.
2. Providing a user interface for selecting a translation key, editing its value in different languages, and saving these edits to the database.
3. Importing translation data from a JSON file into the database.

The application aims to simplify the process of managing translations for multi-language projects, enabling easy updates and imports of translation data.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/translation-service-node.git
cd translation-service-node
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
