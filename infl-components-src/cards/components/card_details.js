const React = require('react');
const $ = require('jquery');

const CardMetaData = require('./card_meta_data');
const ellipsisText = require('./ellipsis_text');

class CardDetails extends React.Component {
  render() {
    return <div className="pt-challenge-details">{this.props.children}</div>;
  }
}

CardDetails.Headline = React.createClass({
  propTypes: {
    headline:        React.PropTypes.string,
    onHeadlineClick: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      headline:        '',
      onHeadlineClick: function() {}
    };
  },

  componentDidMount: function() {
    this._ellipsisHeadline();
    this._addWindowResizeEvent();
  },

  componentDidUpdate: function() {
    this._ellipsisHeadline();
  },

  componentWillUnmount: function() {
    this._removeWindowResizeEvent();
  },

  render: function() {
    return (
      <h4 className="headline" ref="headline" onClick={this.props.onHeadlineClick}>{this.props.headline}</h4>
    );
  },

  _addWindowResizeEvent: function() {
    $(window).resize(this._ellipsisHeadline);
  },

  _ellipsisHeadline: function() {
    const headline = React.findDOMNode(this.refs.headline);
    const headlineMaxHeight = parseInt($(headline).css('max-height'));

    ellipsisText.run(headline, headlineMaxHeight);
  },

  _removeWindowResizeEvent: function() {
    $(window).off('resize', this._ellipsisHeadline);
  }
});

CardDetails.Description = React.createClass({
  PropTypes: {
    description: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      description: ''
    };
  },

  render: function() {
    return (
      <div ref="description" className="description" dangerouslySetInnerHTML={{__html: this.props.description}}></div>
    );
  }
});

module.exports = CardDetails;
