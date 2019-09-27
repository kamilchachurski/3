# React Redux Project Starter Kit

## Introduction

### Technologies

In addition to basic technologies such as HTML, CSS, and JavaScript you can use:

* SCSS
* Axios
* React.js
* PropTypes
* React Router
* Redux

### Features

* using Webpack and Webpack Dev Server
* supporting Live Reload and Hot Module Replacement
* recognizing environment variables
* resolving module paths to the source directory
* compiling SCSS files into CSS files and adding vendor prefixes
* converting ECMAScript 2015+ and JSX syntax into a backward compatible JavaScript version
* identifying and reporting on patterns in JavaScript
* minifying files and generating source maps
* compressing graphics
* copying specific files

## Getting started

### Prerequisites

* Node.js version `13.2.0`
* Yarn version `1.19.2`

### Installation

Clone this repository:

```
git clone git@bitbucket.org:kamil-chachurski/react-redux-project-starter-kit.git
cd react-redux-project-starter-kit
```

Install dependencies:

```
yarn install
```

### Commands

Run a development server:

```
yarn run server
```

Build a production version:

```
yarn run builder
```

## Good to know

### Structure

* `screens` contains main screens (routes)
* `features` contains screen features
* `redux` contains main reducer and store
* `static` contains static files
* `assets` contains assets and global styles

Each feature could be built from:

* `component`
    * `index.jsx` contains Stateful Component
    * `view.jsx` contains Stateless Component
    * `view.scss` contains component styles
* `utilities`
    * `utility-name.js` contains a utility
* `requests`
    * `request-name.js` contains an API call
* `redux`
    * `types.js` contains constans
    * `actions.js` contains actions
    * `reducer.js` contains a reducer

### Environment variables

You can define environment variables in a `.env` file. It should contain:

```
```

### Contributors

Kamil Chachurski `kamil.chachurski@kissdigital.com`