var React = require('react/addons');
var classNames = require('classnames');

var Accordion = React.createClass({
  getDefaultProps: function() {
    return {
      sections: []
    };
  },
  propTypes : {
    sections: React.PropTypes.array
  },
  getInitialState: function(){
    return { openSectionIndex: -1 }
  },
  _buildSections: function(props){
    return props.sections.map(this._buildSection);
  },
  _buildSection: function (section, index) {
    return (
      <AccordionSection  key={"accordion-section-" + index}>
        <AccordionHeader {...section} index={index} open={this._isSectionOpen(index)} toggleOne={this._toggleOne} />
        <AccordionBody body={section.body} />
      </AccordionSection>
    );
  },
  _isSectionOpen: function(index){
    return index === this.state.openSectionIndex;
  },
  _toggleOne: function(id){
    if(this.state.openSectionIndex === id){
      this.setState({openSectionIndex: -1});
    } else {
      this.setState({openSectionIndex: id});
    }
  },
  _uniqueIdentifier : null,
  _resetAccordionState: function(){
    if(this._uniqueIdentifier !== this.props.uniqueIdentifier){
      this.state.openSectionIndex = -1;
    }
    this._uniqueIdentifier = this.props.uniqueIdentifier;
  },
  render: function () {
    this._resetAccordionState();
    return (
      <ul className="accordion">
        {this._buildSections(this.props)}
      </ul>
    );
  }
});

var AccordionSection = React.createClass({
  render: function() {
    return (
      <li className="accordion-section">
        {this.props.children}
      </li>
    );
  }
});

var AccordionHeader = React.createClass({
  propTypes : {
    open: React.PropTypes.bool,
    isEnabled: React.PropTypes.bool
  },
  _toggleContent: function(){
    if(this.props.isEnabled){
      this.props.toggleOne(this.props.index);
    }
  },
  _determineCSSClasses: function(){
    return classNames({
      'section-heading': true,
      'open': this.props.open,
      'disabled': this.props.isEnabled === false
    });
  },
  render: function() {
    return (
      <h3 className={this._determineCSSClasses()} onClick={this._toggleContent}>
        {this.props.header}
      </h3>
    );
  }
});

var AccordionBody = React.createClass({
  render: function() {
    return (
      <div className="section-details">
        <div className="section-details-inner">
          {this.props.body}
        </div>
      </div>
    );
  }
});

module.exports = Accordion;
