/*eslint react/no-multi-comp: 0*/

import React, { Component } from 'react';
import useSheet from './jssInstance';
import defaultTheme from './defaultTheme';

export const createTheme = theme => ComposedComponent =>
  class ThemeContext extends Component {
    static childContextTypes = {
      patternityTheme: React.PropTypes.object
    }

    getChildContext() {
      return {
        patternityTheme: { ...defaultTheme, ...theme }
      };
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  };


export const ThemeComponent = (ComposedComponent, mappingFunc) =>
  class ThemeApply extends Component {
    static contextTypes = {
      patternityTheme: React.PropTypes.object
    }

    render() {
      if (!this.context || !this.context.patternityTheme) return <ComposedComponent {...this.props} />;
      return React.createElement(useSheet(ComposedComponent, mappingFunc(this.context.patternityTheme)), this.props);
    }
  };
