var React = require('react');

var BuildTabsMixin = {
  _buildTabs : function(onClick){
    var that = this;
    return React.Children.map(this.props.tabs, function(tab, index){
      return (
        <InternalTab title={tab.props.title} id={tab.id} onClick={onClick} key={index} index={index} tabIsOpen={that._isTabOpen(index)} />
      );
    });
  },
  _isTabOpen : function(index) {
    return (this.props.openTabIndex === index);
  },
};

var InternalTab = React.createClass({
  getDefaultProps : function(){
    return {
      title : "",
      tabIsOpen : false,
      index : -1,
      id : "",
      onClick : function(){}
    };
  },
  propTypes : {
    title : React.PropTypes.string,
    tabIsOpen : React.PropTypes.bool,
    index : React.PropTypes.number,
    id : React.PropTypes.string,
    onClick : React.PropTypes.func
  },
  getInitialState : function(){
    return {
      tabIsOpen : this.props.tabIsOpen
    };
  },
  componentWillReceiveProps: function(newProps){
    this.setState({
      tabIsOpen : newProps.tabIsOpen
    });
  },
  render: function() {
    return (
      <li className={"pt-tab " + this._isTabOpen()} id={this.props.id}>
        <a href="javascript:void(0);" onClick={this._handleClick}>
          <span>{this.props.title}</span>
        </a>
      </li>
    );
  },
  _isTabOpen : function(){
    return this.state.tabIsOpen ? "tab-open" : "";
  },
  _handleClick : function(event){
    event.preventDefault();
    this.props.onClick(this.props.index);
  }
});

module.exports = BuildTabsMixin;
