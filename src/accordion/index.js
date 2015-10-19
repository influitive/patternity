import React, { Component, PropTypes } from 'react';

import AccordionBody from './accordion-body';
import AccordionHeader from './accordion-header';

// import style from './_accordion.scss';

class Accordion extends Component {
  static propTypes = {
    sections:         PropTypes.array.isRequired,
    uniqueIdentifier: PropTypes.string,
    openSectionIndex: function(props) {
      const n = props.openSectionIndex;

      if (n == null) return;
      if (typeof n !== 'number' || n !== parseInt(n, 10) || n < 0) {
        return new Error('Invalid `openSectionIndex` supplied to `Accordion`' +
          ', expected a positive integer');
      }
    }
  }

  static defaultProps = {
    openSectionIndex: null,
    sections:         []
  }

  componentWillReceiveProps(nextProps) {
    // this.setState({openSectionIndex: nextProps.openSectionIndex});
  }

  componentWillMount() {
    if (this._uniqueIdentifier !== this.props.uniqueIdentifier) {
      this.setState({
        openSectionIndex: this.props.openSectionIndex
      });
    }
    this._uniqueIdentifier = this.props.uniqueIdentifier;
  }

  render() {
    return <ul className='accordion'>
      {this.props.sections.map(this._buildSection)}
    </ul>;
  }

  _buildSection = (section, index) => {
    return <li className="accordion-section" key={'accordion-section-' + index}>
      <AccordionHeader {...section} index={index}
        open={this._isSectionOpen(index, section.isEnabled)}
        toggleOne={this._toggleOne} />
      <AccordionBody open={this._isSectionOpen(index, section.isEnabled)} body={section.body} />
    </li>;
  }

  _isSectionOpen = (index, isEnabled) => {
    return (index === this.state.openSectionIndex) && isEnabled;
  }

  _toggleOne = (id) => {
    if (this.state.openSectionIndex === id) {
      this.setState({openSectionIndex: -1});
    } else {
      this.setState({openSectionIndex: id});
    }
  }

  _uniqueIdentifier = null
}

export default Accordion;
