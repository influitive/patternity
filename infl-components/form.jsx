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
  getInitialState : function(){
    return {
      numberOfColumns: ""
    };
  },
  componentDidMount : function(){
    this._determineNumberOfColumns();
  },
  render: function () {
    return (
      <form className={"pt-form " + this.state.numberOfColumns} ref="form"
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
    var numberOfColumns = 0;
    for(var i = 0; i < this.refs.form.getDOMNode().children.length; i++) {
      if(this._isFormColumn(this.refs.form.getDOMNode().children[i])){
        numberOfColumns++;
      }
    }
    this.setState({
      numberOfColumns: this._convertNumberToWords(numberOfColumns)
    });
  },
  _isFormColumn : function(child){
    return child.className === 'pt-form-column';
  },
  _convertNumberToWords : function(numberOfColumns){
    if(numberOfColumns === 2) {
      return "two-column";
    } else if(numberOfColumns === 3) {
      return "three-column";
    } else {
      return "";
    }
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
  shouldComponentUpdate : function(){
    return false;
  },
  render: function () {
    return (
      <div className="pt-form-row">
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
