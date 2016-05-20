# start-react-project
React - es2015 project BABEL + BROWSERIFY

[![Build Status](https://travis-ci.org/suxxus/start-react-project.svg?branch=master)](https://travis-ci.org/suxxus/start-react-project)
[![Code Climate](https://codeclimate.com/github/suxxus/start-react-project/badges/gpa.svg)](https://codeclimate.com/github/suxxus/start-react-project)
[![Dependency Status](https://gemnasium.com/badges/github.com/suxxus/start-react-project.svg)](https://gemnasium.com/github.com/suxxus/start-react-project)

## Features ###
* npm scripts
* es2015
* Lint ESLINT
* Unit testing TAPE
* BrowserSync
* React Storybook
* Express


## Clone the repo & install
```
git clone https://github.com/suxxus/start-react-project.git
cd ./start-react-project
npm install
```
## Usage
* npm run update
* delete .git
* git init
* remove example files at ./src
* npm run devc or npm run dev

## Tips
* Example of component.
* Unit test example with tape.
* Example of react Storybook, with dummy component.

*Feel free to use it as a starter template and to expand on it as needed*

## Scripts

The `package.json` file comes with the following scripts

`npm run <name of script>`

`test`: run provided unit tests.

`coverage`: add coverage when running tests.

`coverall`: run coverage tasks.

`lint`: lint all babel code.

`browsersync`: launch a dev server(http://localhost:3000) providing the app at ./build, start watching files at ./src. proxy to port:4000.

`build`: generates the compiled app at ./build directory.

`dev`:  runs a dev console that reports lint and unit tests and start watching for changes at *.js files, perform build tasks.

`start`: runs server at port:8080 provide files place at ./public.

`storybook`:  launch a server at port 9001.

`dist`: generates a distribution version, placed at ./dist

`prepublish`: perform prepublish:create and dist task, copy files from ./dist to ./server/public.

`check`: check outdated npm modules.

`update`: update outdated npm modules.
