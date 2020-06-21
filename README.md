![Иллюстрация к проекту](https://user-images.githubusercontent.com/45331104/85237024-d4806880-b42b-11ea-93e2-96a39db3423a.png)

### `yarn start`
- Runs the app in the development mode.<br />
- [http://localhost:3000](http://localhost:3000) to view it in the browser.

Runs the app in the development mode.<br />	The project supports both English and Russian localizations.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project description

#### Find Github repos easily and see detailed repo info. Find Github repos easily and see detailed repo info.

The project uses modern client-side web-technologies as following libraries and frameworks: `React` (with hooks) for dynamic declarative DOM manipulation and event handling, `Redux (Toolkit)` for state manegment, `Typescript` for static type checking, `Jest` for testing, `Eslint` and `Husky` for better developer experience.

The project supports both English and Russian localizations.

Explore API Github: https://developer.github.com/v3/

## Access token

In order to increase Github API [rate limit](https://developer.github.com/v3/#rate-limiting) you should use the personal access token.

[Create personal Github API access token](https://github.com/settings/tokens) and paste it in the `GITHUB_OAUTH_TOKEN` field of `secret_example.json` file and then rename file to `secret.json`.

## Other scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `yarn start:dev`
- Runs the app ignoring Typescript errors.

### `yarn build`
- Builds the app for production.

### `yarn test`
- Launches the test runner in the interactive watch mode.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
It will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) into your for you to have full control over them. 

### `yarn lint`

- Runs eslint and finds inconsistencies with Airbnb style guide and other errors.
 Note the pre-commit hook does not allow to make the commit if there are some errors.

### `yarn lint:fix`
- Runs eslint and fixes auto-fixable errors.

### `yarn predeploy`
- Runs before deploy and creates production build.

### `yarn deploy`
- Deploys project to Github Pages.
 Note the pre-push hook makes deployment on every push.
