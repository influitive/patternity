var React   = require('react');

var ListPicker = React.createClass({
  getDefaultProps: function() {
    return {
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
          <span className="icon fa fa-angle-right" />
          {this.props.item.name}
        </Component>
      </li>
    );
  }
});

module.exports = ListPicker;
