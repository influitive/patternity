var React = require('react');

var Sidebar = React.createClass({
  render: function () {
    return (
      <div className="panel-sidebar">
        <div className="panel-sidebar-inner" ref="sidebar">
          {this.props.children}
        </div>
      </div>
    );
  }
});

Sidebar.Heading = React.createClass({
  propTypes : {
    title: React.PropTypes.string
  },
  render: function(){

    return (
      <div className="panel-block" ref="heading">
        <h3>
          {this._buildHeading()}
        </h3>
        {this._buildMessage()}
      </div>
    );
  },
  _buildMessage: function(){
    return this.props.message ? (<p>{ this.props.message }</p>) : "";
  },
  _buildHeading : function(){
    if(this.props.headingComponent){
      var Component = this.props.headingComponent;
      return (
        <Component {...this.props.headingComponentParams}>
          {this.props.title}
        </Component>
      );
    } else {
      return this.props.title;
    }
  }
});

Sidebar.NavList = React.createClass({
  getDefaultProps: function() {
    return {
      title : "",
      listItems: []
    };
  },
  propTypes : {
    listItems: React.PropTypes.array,
    title : React.PropTypes.string
  },
  _buildList: function(listItems){
    return this._buildListItems(listItems);
  },
  _buildListItems: function(listItems){
    return listItems.map(function (item, index) {
      return (<ListItem item={item} key={"list-picker-item-" + index} />);
    });
  },
  render: function () {
    return (
      <div className="panel-block">
        <h4 className="list-title" ref="title">{this.props.title}:</h4>
        <ul className="list-picker" ref="list">
          {this._buildList(this.props.listItems)}
        </ul>
      </div>
    );
  }
});

var ListItem = React.createClass({
  getDefaultProps: function() {
    return {
      item: {}
    };
  },
  propTypes : {
    item: React.PropTypes.object
  },
  render: function () {
    var Component = this.props.item.listItemComponent;
    return (
      <li>
        <Component {...this.props.item.listItemComponentProps}>
          <span className="icon ic ic-chevron-right" />
          {this.props.item.name}
        </Component>
      </li>
    );
  }
});

module.exports = Sidebar;
