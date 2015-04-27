var React = require('react/addons');
var classNames = require('classnames');

var Accordion = React.createClass({
  getDefaultProps: function() {
    return {
      sections: [],
      openSectionIndex : -1,
      uniqueIdentifier : ""
    };
  },
  propTypes : {
    sections: React.PropTypes.array.isRequired,
    openSectionIndex : React.PropTypes.number,
    uniqueIdentifier : React.PropTypes.string
  },
  getInitialState: function(){
    if(this._isOpenSectionIndexValid(this.props.openSectionIndex)){
      return { openSectionIndex: this.props.openSectionIndex };
    } else {
      return { openSectionIndex: -1 };
    }
  },
  componentWillReceiveProps : function(nextProps){
    if(this._isOpenSectionIndexValid(nextProps.openSectionIndex)){
      this.setState({
        openSectionIndex : nextProps.openSectionIndex
      });
    }
  },
  render: function () {
    this._resetAccordionState();
    return (
      <ul className="accordion">
        {this._buildSections(this.props)}
      </ul>
    );
  },
  _isOpenSectionIndexValid : function(openSectionIndex){
    return (openSectionIndex === parseInt(openSectionIndex, 10));
  },
  _buildSections: function(props){
    return props.sections.map(this._buildSection);
  },
  _buildSection: function (section, index) {
    return (
      <AccordionSection  key={"accordion-section-" + index}>
        <AccordionHeader {...section} index={index} open={this._isSectionOpen(index, section.isEnabled)} toggleOne={this._toggleOne} />
        <AccordionBody body={section.body} />
      </AccordionSection>
    );
  },
  _isSectionOpen: function(index, isEnabled){
    return (index === this.state.openSectionIndex) && isEnabled;
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
      this.state.openSectionIndex = this.props.openSectionIndex;
    }
    this._uniqueIdentifier = this.props.uniqueIdentifier;
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
