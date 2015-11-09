const React = require('react');
const merge = require('lodash/object/merge');
const $ = require('jquery');

const Icon = require('../icon');
const Popover = require('../../lib/popover');

const Tooltip = React.createClass({
  displayName: 'Tooltip',

  propTypes: {
    title:             React.PropTypes.string,
    element:           React.PropTypes.node.isRequired,
    position:          React.PropTypes.oneOf(['top', 'bottom']),
    isClickable:       React.PropTypes.bool,
    containerSelector: React.PropTypes.string,
    onOpen:            React.PropTypes.func,

    style: React.PropTypes.shape({
      content: {
        minWidth: React.PropTypes.string.isRequired,
        padding:  React.PropTypes.string.isRequired,
        fontSize: React.PropTypes.string.isRequired
      }
    })
  },

  getDefaultProps: function() {
    return {
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
    };
  },

  getInitialState: function() {
    return {
      showTooltip: false,
      showClose:   false,
      wasClicked:  false
    };
  },

  componentDidMount: function() {
    $('body').click(this._closeTooltip);
  },

  componentWillUnmount: function() {
    $('body').off('click', this._closeTooltip);
  },

  render: function() {
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
  },

  _determineContentStyle: function() {
    return merge(this.styles.popover.content, this.props.style.content);
  },

  _tooltipElement: function() {
    return (
      <span className="tool-tip-element"
          onClick={this._clickTooltip}
          onMouseOver={this._hoverToggleTooltip}
          onMouseOut={this._hoverToggleTooltip}
          ref="element"
          style={this.styles.element}>
        {this.props.element}
      </span>
    );
  },

  _hoverToggleTooltip: function(shouldShow) {
    if (!this.state.wasClicked) {
      this._updateState({
        showTooltip: !this.state.showTooltip,
        showClose:   false,
        wasClicked:  false
      });
    }
  },

  _clickTooltip: function(event) {
    if (this.props.isClickable) {
      this._showTooltip(event);
    }
  },

  _showTooltip: function(event) {
    event.preventDefault();
    event.stopPropagation();

    this._updateState({
      showTooltip: true,
      showClose:   true,
      wasClicked:  true
    });
  },

  _closeTooltip: function(event) {
    this._updateState({
      showTooltip: false,
      showClose:   false,
      wasClicked:  false
    });
  },

  _updateState: function(newState) {
    this.setState(newState);
  },

  styles: {
    popover: {
      popover2: {
        background:  'rgba(68, 68, 68, 0.9)',
        borderColor: null,
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
});

const CloseTooltip = React.createClass({ // eslint-disable-line react/no-multi-comp
  propTypes: {
    onClick:   React.PropTypes.func.isRequired,
    showClose: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      showClose: false
    };
  },

  render: function() {
    return this._showClose();
  },

  _showClose: function() {
    if (!this.props.showClose) {
      return null;
    }

    return this._closeButton();
  },

  _closeButton: function() {
    return (
      <span
          className='close'
          onClick={this.props.onClick}
          ref="close"
          style={this.styles.close}>
        <Icon icon='times' />
      </span>
    );
  },

  styles: {
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
});

module.exports = Tooltip;
