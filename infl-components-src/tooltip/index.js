import React, {Component, PropTypes} from 'react';
const _ = require('lodash');
const $ = require('jquery');

const Icon = require('../icon');
const Popover = require('../../lib/popover');


class CloseTooltip extends Component { // eslint-disable-line react/no-multi-comp
  static propTypes = {
    onClick:   React.PropTypes.func.isRequired,
    showClose: React.PropTypes.bool
  }

  static defaultProps = {
    showClose: false
  }

  render() {
    return this._showClose();
  }

  _showClose = () => {
    if (!this.props.showClose) {
      return null;
    }

    return this._closeButton();
  }

  _closeButton = () => {
    return (
      <span
          className='close'
          onClick={this.props.onClick}
          ref="close"
          style={this.styles.close}>
        <Icon icon='times' />
      </span>
    );
  }

  styles = {
    close: {
      float:      'right',
      fontSize:   '20px',
      color:      '#fff',
      opacity:    '1',
      cursor:     'pointer',
      display:    'block',
      textShadow: 'none',
      fontWeight: 'normal'
    }
  }
}

export default class Tooltip extends Component {

  static propTypes = {
    title:             PropTypes.string,
    element:           PropTypes.node.isRequired,
    position:          PropTypes.oneOf(['top', 'bottom']),
    isClickable:       PropTypes.bool,
    containerSelector: PropTypes.string,
    onOpen:            PropTypes.func,
    // The prop should be a shape with a shape inside but React 0.14 doesn't support this.
    style: PropTypes.object
  }

  static defaultProps = {
    title:             '',
    position:          'top',
    isClickable:       true,
    containerSelector: 'body',
    onOpen:            function() {},

    style: {
      content: {
        minWidth: '300px',
        padding:  '13px 13px 26px 13px',
        fontSize: '13px'
      }
    }
  }

  state = {
    showTooltip: false,
    showClose:   false,
    wasClicked:  false
  }


  componentDidMount() {
    $('body').click(this._closeTooltip);
  }

  componentWillUnmount() {
    $('body').off('click', this._closeTooltip);
  }

  render() {
    return (
      <span className="pt-tooltip" ref="tooltip">
        <Popover
            element={this._tooltipElement()}
            isOpen={this.state.showTooltip}
            position={this.props.position}
            containerSelector={this.props.containerSelector}
            onOpen={this.props.onOpen}
            style={this.styles.popover.popover2}>
          <div ref="tip" className="pt-tooltip-content" style={this._determineContentStyle()}>
            <CloseTooltip
                onClick={this._closeTooltip}
                showClose={this.state.showClose}
                ref="close" />
            {this.props.children}
          </div>
        </Popover>
      </span>
    );
  }

  _determineContentStyle = () =>{
    return _.merge(this.styles.popover.content, this.props.style.content);
  }

  _tooltipElement = () => {
    return (
      <span className="tool-tip-element"
          onClick={this._clickTooltip}
          onMouseOver={this._handleMouseOver}
          onMouseOut={this._handleMouseOut}
          ref="element"
          style={this.styles.element}>
        {this.props.element}
      </span>
    );
  }

  _handleMouseOver = () => {
    this._updateState({
      showTooltip: true,
      showClose:   false,
      wasClicked:  false
    });
  }

  _handleMouseOut = () => {
    if (!this.state.wasClicked) {
      this._updateState({
        showTooltip: false,
        showClose:   false,
        wasClicked:  false
      });
    }
  }

  _clickTooltip = (event) => {
    if (this.props.isClickable) {
      this._showTooltip(event);
    }
  }

  _showTooltip = (event) => {
    event.preventDefault();
    event.stopPropagation();

    this._updateState({
      showTooltip: true,
      showClose:   true,
      wasClicked:  true
    });
  }

  _closeTooltip = (event) => {
    this._updateState({
      showTooltip: false,
      showClose:   false,
      wasClicked:  false
    });
  }

  _updateState = (newState)  =>{
    this.setState(newState);
  }

  styles = {
    popover: {
      popover2: {
        background:  'rgba(68, 68, 68, 0.9)',
        borderColor: '',
      },
      content: {
        color:    '#fff',
        width:    '100%',
        position: 'relative'
      },
      arrow: {
        borderTopWidth: '10px',
        borderTopColor: '#444444',
        opacity:        '0.9'
      },
      element: {
        fontSize:      '20px',
        color:         '#444444', //$darker-grey
        verticalAlign: 'middle',
        cursor:        'pointer',
        display:       'inline-block'
      }
    }
  }
}
