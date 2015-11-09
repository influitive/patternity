const React = require('react');
const Points = require('./points');
const Icon = require('../../icon');

class CardMetaData extends React.Component {
  render() {
    return <div className="pt-challenge-metadata">
      {this.props.children}
    </div>;
  }
}

export default CardMetaData;
