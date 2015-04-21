var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');
var Code      = require('../../patternlab-components/code.jsx');
var Require   = require('../../patternlab-components/require.jsx');

var ColourPattern = React.createClass({
  render : function(){
    return (
      <div className="colours-pattern">
        <Pattern title="colours">
          <p>The colours are set via sass variables and can be found in theme.scss.  The first two can change via white labeling, and are set by each company.</p>

          <Colours>
            <Colours.Colour colourCss="color-primary-background" name="Bright Blue" colourHex="#08a5c5" colourCode="$theme-color-primary, $info-color" />
            <Colours.Colour colourCss="color-secondary-background" name="Dark Blue" colourHex="#046f99" colourCode="$theme-color-secondary" />
            <Colours.Colour colourCss="color-success-background" name="Green" colourHex="#8BC540" colourCode="$success-color" />
            <Colours.Colour colourCss="color-error-background" name="Red" colourHex="#c54040" colourCode="$error-color" />
            <Colours.Colour colourCss="color-warning-background" name="Yellow" colourHex="#ffcc00" colourCode="$warning-color" />
            <Colours.Colour colourCss="color-darker-grey-background" name="Darker Grey" colourHex="#444444" colourCode="$darker-grey" />
            <Colours.Colour colourCss="color-dark-grey-background" name="Dark Grey" colourHex="#666666" colourCode="$dark-grey" />
            <Colours.Colour colourCss="color-medium-grey-background" name="Medium Grey" colourHex="#969696" colourCode="$medium-grey" />
            <Colours.Colour colourCss="color-light-grey-background" name="Light Grey" colourHex="#d0d2d3" colourCode="$light-grey" />
            <Colours.Colour colourCss="color-lighter-grey-background" name="Lighter Grey" colourHex="#eeeeee" colourCode="$lighter-grey" />
          </Colours>

          <Require>
            <Require.CSS>
              @import "patternity/infl-styles/theme";
            </Require.CSS>
          </Require>
        </Pattern>
      </div>
    );
  }
});

var Colours = React.createClass({
  render : function(){
    return (
      <ul className="sg-colors">
        {this.props.children}
      </ul>
    );
  }
});

Colours.Colour = React.createClass({
  getDefaultProps : function(){
    return {
      colourCss : "",
      name : "",
      colourHex : "",
      colourCode : ""
    };
  },
  propTypes : {
    colourCss : React.PropTypes.string,
    name : React.PropTypes.string,
    colourHex : React.PropTypes.string,
    colourCode : React.PropTypes.string
  },
  render : function(){
    return (
      <li>
        <span className={"sg-swatch " + this.props.colourCss}></span>
        <span className="sg-name">
          <strong>{this.props.name}</strong>
        </span>
        <span className="sg-label">{this.props.colourHex}</span>
        <span className="sg-label-code">{this.props.colourCode}</span>
      </li>
    );
  }
});

module.exports = ColourPattern;
