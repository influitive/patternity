var React = require('react');
var Icon = require('../../icon.jsx');
var Tooltip = require('../../tooltip.jsx');
var classNames = require('classnames');

var acceptedStatusType = ['started', 'expiring', 'limited', 'limited_expiring', 'multi'];

var ChallengeTile = React.createClass({
  PropTypes : {
    type : React.PropTypes.oneOf(acceptedStatusType).isRequired,
  },

  componentDidMount : function(){
    this._checkForLimitedExpiring();
  },

  render : function(){
    return this._addTile();
  },

  _addTile : function(){
    if(!this._isAcceptedStatusType()){
      return null;
    }

    return (
      <div className={"pt-challenge-tile " + this.props.type}>
        <Tooltip element={<Icon icon={this._determineTileIcon()} />} position="bottom" isClickable={false}>
          {this._determineTooltipText()}
        </Tooltip>
      </div>
    );
  },

  _isAcceptedStatusType : function(){
    return acceptedStatusType.indexOf(this.props.type) !== -1 && this.props.type !== 'limited_expiring';
  },

  _checkForLimitedExpiring : function(){
    if (this.props.type === 'limited_expiring') { console.warn('limited_expiring should be split into limited and expiring'); }
  },

  _determineTileIcon : function(){
    var tileIcons = {
      'started' : 'inprogress',
      'expiring' : 'expiring',
      'limited' : 'limited', //not official
      'multi' : 'multi'
    }

    return tileIcons[this.props.type];
  },

  _determineTooltipText : function(){
    var tileToolTips = {
      'started' : 'In Progress',
      'expiring' : 'Expires Soon',
      'limited' : 'Limited', //not official
      'multi' : 'Multi-Complete',
    }

    return tileToolTips[this.props.type];
  }
});

ChallengeTile.Container = React.createClass({
  render : function(){
    return (
      <div className="pt-challenge-tile-container">
        {this.props.children}
      </div>
    );
  }
});

module.exports = ChallengeTile;
