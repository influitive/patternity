var React = require('react');
var Icon = require('../../icon.jsx');
var Tooltip = require('../../tooltip.jsx');
var classNames = require('classnames');

var acceptedStatusType = ['started', 'expiring', 'limited', 'multi'];

var ChallengeTile = React.createClass({
  PropTypes : {
    type : React.PropTypes.oneOf(acceptedStatusType).isRequired,
    description : React.PropTypes.string.isRequired,
    onShowDescription : React.PropTypes.func
  },

  getDefaultProps : function(){
    return {
      onShowDescription : function(){}
    };
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
          {this.props.description}
        </Tooltip>
      </div>
    );
  },

  _isAcceptedStatusType : function(){
    return acceptedStatusType.indexOf(this.props.type) !== -1;
  },

  _determineTileIcon : function(){
    var tileIcons = {
      'started' : 'inprogress',
      'expiring' : 'expiring',
      'limited' : 'cursor-click',
      'multi' : 'multi'
    }

    return tileIcons[this.props.type];
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
