# Welcome to The Quuack React Library

The React Library is a workshop environment that:

- Provides a tool for **rapid frontend development**.
- Ensures **UX consistency** across any number of projects.
- Facilitates painless, projects-wide **UI/UX iteration** and improvement.
- Reduces redundancy and **increases efficiency** in development efforts.

Most importantly, the React Library is a collaborative work between all teammates at [Quuack](https://www.quuack.com/)!

## Overview

The React Library is split into three segments: a **Components Library**, a **Hooks Library** and a **Starters Library**.

### Components Library

The React Components Library provides interactive functionality for a wide range of common features. It's based on the principles of [Atomic Design](http://atomicdesign.bradfrost.com/), implements [Styled Components](https://styled-components.com/) and extends from [Ant Design](https://ant.design/). This tool allows to:

- Build components in isolation.
- Mock hard-to-reach use cases.
- Document use cases as stories.

### Hooks Library

The React Hooks Library is a set of custom hooks with specific functionality that can be reused across different components.

### Starters Library

The React Starters Library is a set of starters aim to easily bootstrap React and React Native projects. Depending on the app's nature and expected functionality you may choose a combination of the following technologies:

- [React](https://es.reactjs.org/)
- [React Native](https://reactnative.dev/)
- [Gatsby](https://www.gatsbyjs.com/)
- [Redux](https://es.redux.js.org/)
- [Redux Saga](https://redux-saga.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Redux Persist](https://github.com/rt2zz/redux-persist)
- [Firebase](https://firebase.google.com/)

## Quickstart

1. Clone the repository.
`git clone https://github.com/srulfi/react-library`
2. Go into the repository
`cd react-library`
3. Install dependencies.
`yarn`
4. Run the app.
`yarn start`
5. The app is now running at [http://localhost:6006](http://localhost:6006)!

## Workflow

1. Cut a branch from `develop` (eg: `feature/carousel`).
2. Work on the feature.
3. Write the unit tests.
4. Document the feature functionality.
5. Create a PR to `develop` with proper label (eg: `enhancement`, `bug`, `documentation`, `minor`, `major`, etc).
6. <em>CI jobs.</em>
7. Review changes if needed.
8. If PR is approved and merged to `develop`, the feature will be available in the next sync with `master`.

## How to consume the library from my app
```
import { GlobalStyle } from "react-library"

const App = () => (
  <>
    <GlobalStyle />
    ...
  </>
)
```
```
import { Button } from "react-library"

const HomePage = () => (
  <>
    <Button primary={true} size="large" onClick={() => console.log("button clicked")}>
      My Button
    </Button>
    ...
  </>
)
```
```
import { useWindowSize } from "react-library"

const App = () => {
  const { width, height } = useWindowSize()

  return (
    <>
      {width}px / {height}px
      ...
    </>
  )
}
``` 

## Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `yarn format`

Formats the code using [Prettier](https://prettier.io/).

#### `yarn lint`

Analyzes the code to find problems using [ESLint](https://eslint.org/).

#### `yarn lint:fix`

Analyzes the code to find problems and tries to fix them.

#### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn chromatic`

Publishes the changes to [Chromatic](https://www.chromatic.com/).

#### `yarn build`

Builds the app for production to the **dist** folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.<br />

The build is minified and the filenames include the hashes.<br />
The app is ready to be deployed.

#### `yarn release`

Publishes a new release to the repository.<br />
**Important: this should only be executed by a CI job on the `master` branch.**

## Read more

The React Library is powered by [Storybook](https://storybook.js.org/) and automated and integrated with Github CI by [Chromatic](https://www.chromatic.com/).

## Permalinks

Links to the latest published version on a given branch. Replace `${branch}` with the designated branch.<br />

- Storybook: [https://${branch}--5f5f83142bda13002259e3cf.chromatic.com](https://${branch}--5f5f83142bda13002259e3cf.chromatic.com)

- Chromatic: [https://chromatic.com/library?appId=5f5f83142bda13002259e3cf&branch=${branch}](https://chromatic.com/library?appId=5f5f83142bda13002259e3cf&branch=${branch})
