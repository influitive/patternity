# Patternity
[![CircleCI branch](https://img.shields.io/circleci/project/thoughtbot/bourbon/master.svg)](https://circleci.com/gh/influitive/patternity/tree/master)

This repository will contain the Influitive Pattern Lab as well as base css, and reusable js components.

# Pattern Lab - Nodejs
Patternity is using the nodejs version of patternlab.io.  Additional documentation for the pattern lab can be found at https://github.com/oscar-g/patternlab-node/tree/dev-gulp

# Installation

Install patternity as a node module.

```
  npm install --save patternity<@version:optional>
```

Note: be sure to install releases from npm, as these are versioned.
  if you install from influitive/patternity you will get the latest master, which may include
  breaking changes

# Compilation

Patternity JSX components can be included in a normal module bundler fashion by requiring components
like so

```javascript
var Alert = require('patternity/lib/alert');
```

Styles require a bit more work (until our whole build pipeline is on Webpack, at which point there's
nothing extra to do).

To inform your build pipeline about the location of patternity's styles, you must add patternity's
includePaths into the compilation step. You can achieve this like so:

```javascript
// Gulp - gulpfile.js

gulp.task('sass', function () {
  return gulp.src("application.scss", { base: './app/assets/stylesheets' })
    .pipe(
      sass({includePaths: require('patternity').includePaths})
    )
    .pipe(gulp.dest("public/assets");
});
```

```javascript
// Webpack - webpack.config.js
// See https://github.com/jtangelder/sass-loader#sass-options for further instructions

function includePaths () {
  var paths = require('patternity').includePaths;

  return paths.map(function(p){
    return ["includePaths[]=", p].join('');
  }).join('&');
}

module.exports = {
  // ... whatever config
  module: {
    loaders: [
      { test: /.scss$/, loader: "style!css!sass?" + includePaths() }
    ]
  }
};
```

At this point, scss files can import patternity files using imports such as:

```scss
@import 'infl-styles/dependencies';
@import 'infl-styles/alert';
```

Note that the 'dependencies' requirement is due to SCSS's poor handling of duplicate imports whereby
if each module (ie 'alert') were to import its dependencies, and you imported multiple of those modules,
SCSS would actually duplicate the 'dependencies'.

Ideally we'd like each module to define its deps for composability, but for now we require that the
app implementing patternity also import its dependencies (once), then whatever subsequent modules.

# React

Most component are implemented using Facebook's [React][react] architecture.

[react]: http://facebook.github.io/react/

## Using components

Components are just required and mounted into you're own react code.

```js
var Alert = require('lib/alert.jsx');

...

<Alert title="I'm a little teapot" >
  <p>Short and stout</p>
</Alert>
```

It will create a basic stylesheet, index file, readme, and test file under 'src/test-component' to help get you started.


# Contributing

Please make sure you follow the style guide below if submitting a pattern to this repo.

## Style Guide

### JavaScript conventions

 * Use `camelCased` variable names instead of `snake_cased` where possible
 * Install the eslint for your editor
 * do `npm run githooks` to set up commit linting when cloning a new patternity repo

### React Components

When creating a React component:

 * Use `.jsx` as the extension
 * Place in the `infl-components` directory
 * Underscore delimited file names: e.g. `alert_box.jsx`
 * Class name must match file name, but camel cased: e.g. `AlertBox`


# Creating New Components

The following command will create a basic component with the name TestComponent:

```
npm run create TestComponent
```

#### General Structure:

```js
import React, { Component, PropTypes } from ''

class Greeter extends Component {
  propTypes = {
    name: PropTypes.string
  }

  defaultProps = {
    name: 'Skye'
  }

  render() {
    return <div>
      {this._greeting()}
    </div>;
  }

  _greeting() {
    const { name } = this.props;
    return `Hello, ${name}.`;
  }
}

export default Greeter;
```

#### Naming

Always assign the created object to a local variable with same name as the class

```js
class Greeter extends Component {
  ...
}

export default Greeter;
```

Also, make sure the component is exported so it's available to `require`ing components.

#### Class Layout

In order to keep our components organized we place the methods and properties of a component in the following order:

  1. React lifecycle methods/properties
    * e.g. `propTypes`, `getDefaultProps`, `componentDidMount`, `componentWillUpdateProps`, etc.
  2. The React `render` method
  3. Local private methods
    * All private methods must start with an underscore `_`, e.g. `_greeting`

#### `render` method

Your `render` method should only return JSX.

#### State vs Props

See [React Docs - Interactity and Dynamic UIs][react-docs-components-are-state-machines]

[react-docs-components-are-state-machines]: http://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html#components-are-just-state-machines

There are generally two things you store in state, __data__ and __view state__. Components which hold data are called _View Controllers_ and usually exist near the top of your view hierarchy. These _View Controllers_ will manage getting the data from the appropriate sources and handing it down to child views through `props`.

__View state__ are still variables held in a components state but generally relates to how the component should render on the screen. An internal state property on a collapsable section would manage the open/close state of the rendered elements.

A components `props` are data that the component uses to render itself. Sometimes components have no props and just represent a reused visual component, but most times they handle some piece of data or other.

e.g.
```js
<Icon icon={'search'} />
```

The `Icon` component is here is taking a string to tell it which icon to render. Internally the component would have access to that string via `this.props.icon`.

In general, the 'dumber' your components are, the easier they are to test, and the easier they are to compose. You should try to limit the amount of components which access your data layer, and these should also be generally limited to your View Controllers.

Also when updating a components state, always be sure to use [`this.setState()`][setState] instead of setting `this.state` directly, since re-renders hinge of off state updates. Multiple calls to `this.setState()` are batched for performance reasons, so calling `this.setState()` 6 times in a method is not a problem. __However__, since `this.setState()` is batched, that makes changes to `this.state` asynchronous, so be careful of accessing `this.state` immediately after calling `this.setState()`. See [React Docs - setState][setState]

Notes:

 * Components which don't render from state won't update if they are already mounted and just receive new props. It's up to the component writer to decide if the new props have changed enough to mandate a change. You have a chance to do this in the [`componentWillReceiveProps`][componentWillReceiveProps] lifecycle method. You can also force a react component to re-render itself using the [`this.forceUpdate`][forceUpdate]

Reference:

  * [React Docs - setState][setState]
  * [React Docs - forceUpdate][forceUpdate]

[setState]: http://facebook.github.io/react/docs/component-api.html#setstate
[forceUpdate]: http://facebook.github.io/react/docs/component-api.html#forceupdate
[componentWillReceiveProps]: http://facebook.github.io/react/docs/component-specs.html#updating-componentwillreceiveprops

#### Component Readmes

Each component can have it's own Readme.md file. New components located in ```src``` will have their Readme.md in their component directory. Older components have their readmes located in ```infl-components-examples``` and the directory looks exactly like infl-components except the files end in ```.readme.md``` instead.

## Publish & Release

Strict semantic versioning:

1. Any change that breaks an existing api should bump the Major version
2. Any added functionality should change the minor version
3. Patch versions are reserved for changes transparent to the end user

**Do not break this convention.**

#### Git convention
##Use git flow
1. if you don't have it installed you can `brew install git-flow`
2. you can also do git-flow style manually, just remember to merge master back into dev after a release
3. git flow setup:
4. `git flow init`
5. accept the default for the first option (master)
6. enter development for the second option (branch name for next release)
7. set version tag prefix to 'v'
8. accept defaults for all other options

Feature git workflow:
1. `git flow feature start <feature-name>`
  this will create a new branch named feature/<feature-name>

develop you feature here and when it's done do:

2. `git flow feature finish <feature-name>`
  this merges your feature into development

Hotfix worflow

1. `git flow hotfix start <version-number>`
  this will create a new branch named hotfix/<version-number>
  develop your hotfix here and when it's done do:
2. `git flow hotfix finish <version-number>`
  this merges your hotfix into master

  and tags the commit with 'v<version-number>'

  master is then back-merged into development

Release git workflow:

1. `git flow release start <version-number>`
  this will create a new branch named release/<version-number>

  example `git flow release start 1.0.62`

2. run `npm version (major|minor|patch) --no-git-tag-version`
  Note: --no-git-tag-version is passed because git flow will be tagging the release

1. `git flow release finish <version-number>`
  you will be prompted to write a message for the tag, "Release version <version-number>" should suffice, you will be writing more detail in github releases feature.
  this will tag master with `v<version-number>`

  this will merge release/<version-number> into master
  as well as back merge the release into development (the version numbers will then match)

#### Publishing

Once you have master at your desired release state, you can run `npm publish` to publish to the npm registry

#### Patternlab

Patternlab resides [here](https://github.com/influitive/patternlab).

The pattern lab is built automatically by circleci. Results for old pattern lab are available at http://patternity.internal.influitive.com. The new pattern lab can be found at http://patternity.experimental.influitive.com.
