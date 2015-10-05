var React = require('react/addons');
var classNames = require('classnames');

var Accordion = React.createClass({
  getDefaultProps: function() {
    return {
      sections:         [],
      openSectionIndex: null,
      uniqueIdentifier: ''
    };
  },

  propTypes: {
    sections:         React.PropTypes.array.isRequired,
    openSectionIndex: React.PropTypes.number,
    uniqueIdentifier: React.PropTypes.string
  },

  getInitialState: function() {
    return {
      openSectionIndex: this._isOpenSectionIndexValid(this.props.openSectionIndex)
        ? this.props.openSectionIndex
        : null
    };
  },

  componentWillReceiveProps: function(nextProps) {
    if (this._isOpenSectionIndexValid(nextProps.openSectionIndex)) {
      this.setState({ openSectionIndex: nextProps.openSectionIndex });
    }
  },

  componentWillMount: function() {
    this._resetAccordionState();
  },

  render: function() {
    return <ul className='accordion'>
      {this.props.sections.map(this._buildSection)}
    </ul>;
  },

  _buildSection: function(section, index) {
    return <AccordionSection key={'accordion-section-' + index}>
      <AccordionHeader {...section} index={index}
        open={this._isSectionOpen(index, section.isEnabled)}
        toggleOne={this._toggleOne} />
      <AccordionBody body={section.body} />
    </AccordionSection>;
  },

  _isOpenSectionIndexValid: function(openSectionIndex) {
    return ((openSectionIndex === parseInt(openSectionIndex, 10))
      && openSectionIndex >= 0);
  },

  _isSectionOpen: function(index, isEnabled) {
    return (index === this.state.openSectionIndex) && isEnabled;
  },

  _toggleOne: function(id) {
    if (this.state.openSectionIndex === id) {
      this.setState({openSectionIndex: -1});
    } else {
      this.setState({openSectionIndex: id});
    }
  },

  _uniqueIdentifier: null,

  _resetAccordionState: function() {
    if (this._uniqueIdentifier !== this.props.uniqueIdentifier) {
      this.setState({
        openSectionIndex: this.props.openSectionIndex
      });
    }
    this._uniqueIdentifier = this.props.uniqueIdentifier;
  }
});

var AccordionSection = React.createClass({
  render: function() {
    return <li className='accordion-section'>
      {this.props.children}
    </li>;
  }
});

var AccordionHeader = React.createClass({
  propTypes: {
    open:      React.PropTypes.bool,
    isEnabled: React.PropTypes.bool
  },

  _toggleContent: function() {
    if (this.props.isEnabled) {
      this.props.toggleOne(this.props.index);
    }
  },

  _determineCSSClasses: function() {
    return classNames({
      'section-heading': true,
      'open':            this.props.open,
      'disabled':        !this.props.isEnabled
    });
  },

  render: function() {
    return <h3 className={this._determineCSSClasses()} onClick={this._toggleContent}>
      {this.props.header}
    </h3>;
  }
});

var AccordionBody = React.createClass({
  render: function() {
    return <div className='section-details'>
      <div className='section-details-inner'>
        {this.props.body}
      </div>
    </div>;
  }
});

module.exports = Accordion;
