import React, { Component, PropTypes } from 'react';

import AccordionBody from './accordion-body';
import AccordionHeader from './accordion-header';

// import style from './_accordion.scss';

const validateIndex = (props, propName) => {
  if (props.initialSectionIndex != null && props.openSectionIndex != null) {
    return new Error('Do not use initialSectionIndex and openSectionIndex together');
  }

  const n = props[propName];

  if (n == null) return;
  if (typeof n !== 'number' || n !== parseInt(n, 10) || n < 0) {
    return new Error('Invalid `initialSectionIndex` supplied to `Accordion`' +
      ', expected a positive integer');
  }
}

class Accordion extends Component {
  static propTypes = {
    sections:            PropTypes.array.isRequired,
    uniqueIdentifier:    PropTypes.string,
    initialSectionIndex: validateIndex,
    openSectionIndex:    validateIndex,
  }

  static defaultProps = {
    initialSectionIndex: null,
    sections:            []
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.openSectionIndex != null) this.setState({openSectionIndex: nextProps.openSectionIndex});
  }

  componentWillMount() {
    const { openSectionIndex, initialSectionIndex } = this.props;
    if (openSectionIndex != null) {
      this.setState({openSectionIndex: openSectionIndex});
      return;
    }
    if (this._uniqueIdentifier !== this.props.uniqueIdentifier) {
      this.setState({
        openSectionIndex: initialSectionIndex
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

    return (
      <li className="accordion-section" key={'accordion-section-' + index}>
        <AccordionHeader {...section} index={index}
          open={this._isSectionOpen(index, section.isEnabled)}
          toggleOne={this._toggleOne}
          onToggle={section.callback || null}/>
        <AccordionBody open={this._isSectionOpen(index, section.isEnabled)} body={section.body} />
      </li>
    );
  }

  _isSectionOpen = (index, isEnabled) => {
    return (index === this.state.openSectionIndex) && isEnabled;
  }

  _toggleOne = (id) => {
    if (this.props.openSectionIndex != null) return;
    if (this.state.openSectionIndex === id) {
      this.setState({openSectionIndex: null});
    } else {
      this.setState({openSectionIndex: id});
    }
  }

  _uniqueIdentifier = null
}

export default Accordion;
