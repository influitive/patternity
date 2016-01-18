const React = require('react');

class InputLabel extends React.Component {
  static displayName = 'InputLabel'

  static propTypes = {
    layout: React.PropTypes.oneOf(['stacked', 'inline']),
    label:  React.PropTypes.string
  }

  static defaultProps = {
    layout: 'inline',
    label:  ''
  }

  render() {
    return (
      <span className={'pt-label ' + this.props.layout + ' ' + this._multiInput()} ref="inputLabel">
        <label htmlFor={this._determineLabelFor()} ref="label">
          <span>{this.props.label + ':'}</span>
          {this._requiredInput()}
        </label>
        {this.props.children}
      </span>
    );
  }

  _multiInput() {
    return this.props.children.length > 0 ? 'multi-input' : '';
  }

  _determineLabelFor() {
    return this.props.children.length > 0 ? this._getNameForMultipleInputs() : this._getNameForSingleInput();
  }

  _getNameForSingleInput() {
    return this.props.children.props.name ? this.props.children.props.name : '';
  }

  _getNameForMultipleInputs() {
    return this.props.children[0].props.name ? this.props.children[0].props.name : '';
  }

  _requiredInput() {
    if (this._isRequiredInput()) {
      return (<span className="ic ic-asterisk required-icon"></span>);
    }
  }

  _isRequiredInput() {
    let foundRequired = false;
    React.Children.map(this.props.children, function(child) {
      if (child.props.required && !foundRequired) {
        foundRequired = true;
      }
    });
    return foundRequired;
  }
}

export default InputLabel;
