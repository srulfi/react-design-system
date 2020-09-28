# Welcome to The Quuack React Library!

The Quuack React Library is a framework that:

- Provides a tool for **rapid frontend development**.
- Facilitates painless, projects-wide **UI/UX iteration** and improvement.
- Reduces redundandy and **increases efficiency** in development efforts.

Most importantly, the React Library is a collaborative effort between all teammates at [Quuack](https://www.quuack.com/).

## Overview

The React Library is split into two segments: a ***Components Library*** and a ***Boilerplates Library***.

### Components Library

The React Components Library is a frontend workshop environment tool to design, build and organize UI components without needing to stand up screens, fuss with data, or build business logic. It allows to:

- Build components in isolation.
- Mock and document hard-to-reach use cases.
- Streamline the workflow and build process.

### Boilerplates Library

The React Boilerplates Library is a set of starters aim to easily bootstrap React and React Native projects. Depending on the project's nature and expected functionality you may choose a combination of the following technologies:

- ReactJS
- React Native
- GatsbyJS
- Redux
- Redux Saga
- Redux Toolkit
- Redux Persist
- Google Firebase

## Quickstart

1. Clone the repository.
`git clone https://github.com/srulfi/react-library`
2. Install repository dependencies.
`yarn`
3. Run project.
`yarn storybook`
4. The project is now running at `http://localhost:6006`!

## Workflow

1. Cut branch from `develop`, eg: `feature/carousel`.
2. Work on feature.
3. Write unit test.
4. Document feature functionality.
5. Push branch to remote repository.
6. Create PR to `develop`.
7. Assign a proper tag (`enhancement`, `bug`, `documentation`, `minor`, `major`, etc).
8. If PR is approved and merged to `develop`, the feature will be available in the next deploy to `master`.

## Available scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn format`

Formats code using [Prettier](https://prettier.io/).

### `yarn lint`

Analyzes the code to find problems using [Eslint](https://eslint.org/).

### `yarn lint:fix`

Analyzes the code to find problems and tries to fix them.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn storybook`

Runs the app in the development mode at [http://localhost:6006](http://localhost:6006).

### `yarn chromatic`

Publishes changes to [Chromatic](https://www.chromatic.com/).

### `yarn build`

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
The app is ready to be deployed.

### `yarn release`

Publishes new release to repository changes. ***Important: this should only be executed by a Github Action on the `master` branch***