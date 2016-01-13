const React   = require('react');

const ButtonGroup = require('../button-group');

import './card.scss';

class Card extends React.Component {
  render() {
    return (
      <div ref="card" className="pt-card">
        {this.props.children}
      </div>
    );
  }
}

Card.Container = React.createClass({
  render: function() {
    return (
      <div ref="container" className="pt-card-container">
        {this.props.children}
      </div>
    );
  }
});

Card.Actions = React.createClass({
  render: function() {
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
