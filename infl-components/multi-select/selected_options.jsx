var React = require('react');

var SelectedOptions = React.createClass({
  propTypes : {
    options : React.PropTypes.array.isRequired,
    removeSelectedOption : React.PropTypes.func.isRequired,
    showPlaceholder : React.PropTypes.bool.isRequired,
    typeAhead : React.PropTypes.string.isRequired,
    handleTypeAheadChange : React.PropTypes.func.isRequired
  },

  render : function(){
    return (
      <div className="selected-options">
        {this._buildSelectedOptions()}
        <input type="text" ref="typeAhead" className="type-ahead" id="type-ahead" name="typeAhead" value={this.props.typeAhead} onChange={this.props.handleTypeAheadChange} />
      </div>
    );
  },

  _buildSelectedOptions : function(){
    if(this.props.showPlaceholder){
      return (
        <span className="placeholder-text">Select...</span>
      );
    }

    var that = this;
    return this.props.options.map(function(option, index){
      return (
        <SelectedOption
          key={index}
          name={option.name}
          value={option.value}
          onClick={that.props.removeSelectedOption} />
      );
    });
  }
});

var SelectedOption = React.createClass({
  PropTypes : {
    name : React.PropTypes.string.isRequired,
    onClick : React.PropTypes.func.isRequired,
    value : React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ])
  },

  getDefaultProps : function(){
    return {
      value : ""
    };
  },

  render : function(){
    return (
      <span className="selected-option" onClick={this._handleClick}>{this.props.name}</span>
    );
  },

  _handleClick : function(event){
    event.stopPropagation();

    this.props.onClick({
      name : this.props.name,
      value :this.props.value
    });
  }
});

module.exports = SelectedOptions;
