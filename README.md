# start-react-project
React - es2015 project BABEL + BROWSERIFY

[![Build Status](https://travis-ci.org/suxxus/start-react-project.svg?branch=master)](https://travis-ci.org/suxxus/start-react-project)
[![Code Climate](https://codeclimate.com/github/suxxus/start-react-project/badges/gpa.svg)](https://codeclimate.com/github/suxxus/start-react-project)
[![Dependency Status](https://gemnasium.com/badges/github.com/suxxus/start-react-project.svg)](https://gemnasium.com/github.com/suxxus/start-react-project)

## Features ###
* npm scripts
* Lint ESLINT
* Unit testing TAPE
* BrowserSync
* React Storybook

## Clone the repo & install
```
git clone https://github.com/suxxus/start-react-project.git
cd ./start-react-project
npm install
```
## Usage
* npm run update
* delete .git
* npm run dev or npm run start

## Tip
* Example of component.
* Unit test example with tape.
* Example of react Storybook, with dummy component.

*Feel free to use it as a starter template and to expand on it as needed*

## Scripts

The `package.json` file comes with the following scripts

`npm run <name of script>`

`test`: run provided unit tests.

`lint`: lint all babel code.

`watch`: start watching files, perform test, lint tasks.

`browsersync`: launch a dev server(http://localhost:3000) providing the app at ./build, start watching files at ./build.

`build`: generates the compiled app at ./build directory.

`dev`:  runs a dev console that reports lint and unit tests and start watching for changes at *.js files.

`start`: runs build, watch, and browsersync tasks.

`storybook`:  launch a server at port 9001.

`dist`: generates a distribution version, placed at ./dist

`check`: check outdated npm modules.

`update`: update outdated npm modules.
