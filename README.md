# Patternity

This repository will contain the Influitive Pattern Lab as well as base css, and reusable js components.

# Pattern Lab - Nodejs
Patternity is using the nodejs version of patternlab.io.  Additional documentation for the pattern lab can be found at https://github.com/oscar-g/patternlab-node/tree/dev-gulp

# Installation

Install patternity as a node module.

```
  npm install --save influitive/patternity
```

# React

Most component are implemented using Facebook's [React][react] architecture.

[react]: http://facebook.github.io/react/

## Using components

Components are just required and mounted into you're own react code.

```js
var Alert = require('infl-components/alert.jsx');

...

<Alert title="I'm a little teapot" >
  <p>Short and stout</p>
</Alert>
```

# Contributing

Please make sure you follow the style guide below if submitting a pattern to this repo.

## Style Guide

### JavaScript conventions

 * Use `camelCased` variable names instead of `snake_cased` where possible

### React Components

When creating a React component:

 * Use `.jsx` as the extension
 * Place in the `infl-components` directory
 * Underscore delimited file names: e.g. `alert_box.jsx`
 * Class name must match file name, but camel cased: e.g. `AlertBox`


#### General Structure:

```js
var React = require('react');

var Greeter = React.createClass({
  propTypes: {
    name: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      name: 'Skye'
    };
  },

  render: function() {
    return (
      <div>
        {this._greeting()}
      </div>
    );
  },

  _greeting: function() {
    return 'Hello, ' + this.props.name;
  }
});

module.exports = Greeter;
```

#### Naming

Always assign the created object to a local variable with same name as the class

```js
var Greeter = React.createClass({
  ...
});

module.exports = Greeter;
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
