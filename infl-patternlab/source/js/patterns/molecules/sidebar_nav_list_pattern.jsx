var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');
var Code      = require('../../patternlab-components/code.jsx');
var Require   = require('../../patternlab-components/require.jsx');

var Form            = require("../../../../infl-components/form.jsx");
var InputLabel      = require("../../../../infl-components/input_label.jsx");
var RadioButton     = require("../../../../infl-components/radio_button.jsx");
var TextInput       = require("../../../../infl-components/text_input.jsx");

var Sidebar   = require("../../../../infl-components/sidebar.jsx");

var SidebarNavListPattern = React.createClass({
  getInitialState : function(){
    return {
      activeNavListItem : "nav-list-item-one"
    };
  },
  render : function(){
    return (
      <div className="sidebar-nav-list-pattern">
        <Pattern title="sidebar nav list">
          <p>The Sidebar.NavList should be used with the Sidebar component.  It is a list of links used for navigation on a page.</p>

          <Pattern.Detail title="Sidebar Nav List">
            <Pattern.Show>
              <Sidebar>
                <Sidebar.NavList
                    title="Sidebar Nav List"
                    key="sidebar-nav-list"
                    listItems={this._navListItems()} />
              </Sidebar>
            </Pattern.Show>

            <Code>
              <Code.JSX>
                &lt;Sidebar.NavList title="Sidebar Nav List" key="sidebar-nav-list" listItems="array_of_nav_list_item_objects" /&gt;
              </Code.JSX>
              <Code.WithoutJSX patternName="Sidebar.NavList" />
              <Code.Props patternProps={this._buildSidebarNavListProps()} />
            </Code>
          </Pattern.Detail>

          <Require>
            <Require.JS>
              var Sidebar = require("patternity/infl-components/sidebar.jsx");
            </Require.JS>
            <Require.CSS>
              @import "patternity/infl-styles/sidebar";
            </Require.CSS>
          </Require>
        </Pattern>
      </div>
    );
  },
  _navListItems : function(){
    var that = this;
    return [
      {
        name : "Nav List Item One",
        listItemComponent : "a",
        listItemComponentProps : {
          className : this._isNavListItemActive("nav-list-item-one"),
          href : "javascript:void(0);",
          onClick : function(){
            that._changeActiveNavListItem("nav-list-item-one")
          }
        },
        key : "nav-list-item-one"
      },
      {
        name : "Nav List Item Two",
        listItemComponent : "a",
        listItemComponentProps : {
          className : this._isNavListItemActive("nav-list-item-two"),
          href : "javascript:void(0);",
          onClick : function(){
            that._changeActiveNavListItem("nav-list-item-two")
          }
        },
        key : "nav-list-item-two"
      }
    ];
  },
  _isNavListItemActive : function(item){
    return item === this.state.activeNavListItem ? "active" : "";
  },
  _changeActiveNavListItem : function(item){
    this.setState({
      activeNavListItem : item
    });
  },
  _buildSidebarNavListProps : function(){
    return {
      title : {
        type : "string",
        defaultValue : "",
        required : false,
        description : "Title of the Sidebar Nav List."
      },
      listItems: {
        type : "array",
        defaultValue : "[...]",
        required : true,
        description : "Array of NavListItem objects."
      },
      "listItems.name": {
        type : "string",
        defaultValue : "",
        required : true,
        description : "Name of the list item."
      },
      "listItems.listItemComponent": {
        type : "react element or html DOM node",
        defaultValue : "",
        required : true,
        description : "Type of component that will be used in the list.  A Link react element or a tag."
      },
      "listItems.listItemComponentProps": {
        type : "object",
        defaultValue : "{ }",
        required : true,
        description : "Props to be passed the the listItemComponent."
      }
    };
  }
});

module.exports = SidebarNavListPattern;
