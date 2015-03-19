var React = require('react');

var HelpTooltip = React.createClass({
  getInitialState: function() {
    return {
      showTooltip: false,
      showClose: false,
      wasClicked: false
    };
  },
  render : function(){
    return (
      <div className="help-tooltip">
        {this._renderTooltip()}
        <span className="help ic ic-question-circle-o" onClick={this._clickShowTooltip} onMouseEnter={this._hoverToggleTooltip} onMouseLeave={this._hoverToggleTooltip}></span>
      </div>
    );
  },
  _renderTooltip : function(){
    if(this.state.showTooltip){
      return (
        <div className="tooltip">
          {this._renderClose()}
          <h3>{this.props.title}</h3>
          {this.props.children}
        </div>
      );
    }
  },
  _renderClose: function(){
    if(this.state.showClose){
      return (<span className="close ic ic-times" onClick={this._clickCloseTooltip}></span>);
    }
  },
  _hoverToggleTooltip : function(){
    if(!this.state.wasClicked){
      this.setState({
        showTooltip: !this.state.showTooltip,
        showClose: false,
        wasClicked: false
      });
    }
  },
  _clickShowTooltip : function() {
    this.setState({
      showTooltip: true,
      showClose: true,
      wasClicked: true
    });
  },
  _clickCloseTooltip : function(){
    this.setState({
      showTooltip: false,
      showClose: true,
      wasClicked: false
    });
  }
});

module.exports = HelpTooltip;
