
# GameVault

GameVault is a React-based single-page app that lists video games and shows details for each game. This repository is a small student project scaffolded from Create React App and adapted to use CRACO, MUI, Redux, and Tailwind-style utilities.

This README documents how to set up, run, and troubleshoot the project, and also lists the important edits and decisions made while refactoring and stabilizing the repository.

## Quick start

Prerequisites

- Node.js (v18+ recommended). This repository has been tested with Node 24 and npm 11.
- Git (optional).

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm start
```

Build for production:

```bash
npm run build
```

Run tests:

```bash
npm test
```

## Project structure

- `public/` — static html and assets. `public/index.html` is the CRA entry file.
- `src/` — application source
	- `src/index.js` — entry, Redux store wiring
	- `src/App.js` — main router
	- `src/components/` — UI components (Navbar, Home, GameDetail, Footer, etc.)
	- `src/actions/` — Redux action creators (games, gameDetails)
	- `src/reducers/` — Redux reducers; `rootReducer.js` combines them
	- `src/styles/GlobalStyles.js` — styled-components global styles (project may also use plain CSS)

## Notable edits and decisions made during maintenance

While stabilizing this repository the following changes were made to make the project runnable and easier to work with:

- Pinned installed package versions in `package.json` so `npm install` is reproducible.
- Added a minimal `craco.config.js` so `craco start` does not fail when a config file is missing.
- Restored minimal `public/index.html` and `src` entry files so the app can boot.
- Migrated some older library usages to their newer APIs:
	- Replaced `@material-ui/*` imports with `@mui/*` equivalents.
	- Converted `react-router-dom` v5 `Switch` usage to v6+ `Routes`/`Route` with `element` props.
	- Adjusted `redux-thunk` import to use the available named export.
- Removed an incomplete cart feature. The cart code was neutralized (placeholder component + no-op reducer) to avoid runtime errors; if you want it fully deleted I can remove placeholder files and clean up remaining imports.
- Restored missing components (`Footer`, `GameDetails`, a minimal `Home`) as placeholders so the app starts.
- Improved the Game Details page layout for readability and responsiveness.

If you prefer a different approach for any of these (for example, fully removing cart files rather than keeping placeholders), tell me and I can apply it.

## How to develop

- Code editor: VS Code recommended.
- Keep Node >= 18 for compatibility with current dependencies.
- Use `npm start` to develop with fast refresh. If you change build config, stop and restart the dev server.

### Linting & formatting

This repository does not include a standardized ESLint/Prettier setup — consider adding one if you plan to continue development.






