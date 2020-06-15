This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project description

#### Find Github repos easily and see detailed repo info. Find Github repos easily and see detailed repo info.

The project uses modern client-side web-technologies as following libraries and frameworks: `React` (with hooks) for dynamic declarative DOM manipulation and event handling, `Redux (Toolkit)` for state manegment, `Typescript` for static type checking, `Jest` for testing, `Eslint` and `Husky` for better developer experience.

The project supports both English and Russian localizations.

Explore API Github: https://developer.github.com/v3/

## Access token

In order to increase Github API [rate limit](https://developer.github.com/v3/#rate-limiting) you should use the personal access token.

[Create personal Github API access token](https://github.com/settings/tokens) and paste it in the `GITHUB_OAUTH_TOKEN` field of `secret_example.json` file and then rename file to `secret.json`.
