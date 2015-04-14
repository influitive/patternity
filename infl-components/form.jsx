var React = require('react');

var Form = React.createClass({
  getDefaultProps : function(){
    return {
       acceptCharset : "",
       action : "",
       autocomplete : "",
       enctype : "",
       method : "",
       name : "",
       novalidate : false,
       target : ""
    };
  },
  propTypes : {
    acceptCharset : React.PropTypes.string,
    action : React.PropTypes.string,
    autocomplete : React.PropTypes.oneOf([
      'on',
      'off',
      '']
    ),
    enctype : React.PropTypes.oneOf([
      'application/x-www-form-urlencoded',
      'multipart/form-data',
      'text/plain',
      ''
    ]),
    method : React.PropTypes.oneOf([
      'get',
      'post',
      ''
    ]),
    name : React.PropTypes.string,
    novalidate : React.PropTypes.bool,
    target : React.PropTypes.oneOf([
      '_blank',
      '_self',
      '_parent',
      '_top',
      ''
    ])
  },
  componentDidMount : function(){
    this._determineNumberOfColumns();
  },
  render: function () {
    return (
      <form className="pt-form" ref="form"
        noValidate={this.props.novalidate}
        acceptCharset={this.props.acceptCharset}
        action={this.props.action}
        autoComplete={this.props.autocomplete}
        encType={this.props.enctype}
        method={this.props.method}
        name={this.props.name}
        target={this.props.target}>
          {this.props.children}
      </form>
    );
  },
  _determineNumberOfColumns : function(){
    var columns = [];
    for(var i = 0; i < this.refs.form.getDOMNode().children.length; i++) {
      if(this._isFormColumn(this.refs.form.getDOMNode().children[i])){
        columns.push(this.refs.form.getDOMNode().children[i]);
      } else if(this._isFormRow(this.refs.form.getDOMNode().children[i]) || this._isFormAction(this.refs.form.getDOMNode().children[i])) {
        this._styleColumns(columns);
        columns = [];
      }
    }
    if(columns.length > 0 ){
      this._styleColumns(columns);
    }
  },
  _isFormColumn : function(child){
    return child.className.indexOf('pt-form-column') > -1;
  },
  _isFormRow : function(child){
    return child.className.indexOf('pt-form-row') > -1;
  },
  _isFormAction : function(child) {

  },
  _styleColumns : function(columns){
    columns.map(function(column){
      column.className = column.className + " column-num-" + columns.length;
    });
  }
});

Form.Column = React.createClass({
  shouldComponentUpdate : function(){
    return false;
  },
  render: function () {
    return (
      <div className="pt-form-column">
        {this.props.children}
      </div>
    );
  }
});

Form.Row = React.createClass({
  getDefaultProps : function(){
    return {
      inputSize : "large",
    };
  },
  propTypes : {
    inputSize : React.PropTypes.oneOf(['small', 'medium', 'large'])
  },
  render: function () {
    return (
      <div className={"pt-form-row " + this.props.inputSize + "-input"} ref="row">
        {this.props.children}
      </div>
    );
  }
});

Form.Actions = React.createClass({
  shouldComponentUpdate : function(){
    return false;
  },
  render: function () {
    return (
      <div className="pt-form-actions">
        {this.props.children}
      </div>
    );
  }
});

module.exports = Form;
