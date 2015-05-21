var React   = require('react');

var ButtonGroup = require('../button_group.jsx');

var Card = React.createClass({
  render : function(){
    return (
      <div ref="card" className="pt-card">
        {this.props.children}
      </div>
    );
  }
});

Card.Container = React.createClass({
  render : function(){
    return (
      <div ref="container" className="pt-card-container">
        {this.props.children}
      </div>
    );
  }
});

Card.Actions = React.createClass({
  render : function(){
    return (
      <div className="pt-card-actions">
        <ButtonGroup>
          {this.props.children}
        </ButtonGroup>
      </div>
    );
  }
});

module.exports = Card;
