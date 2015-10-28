var React = require('react');
var Icon   = require("../../icon.jsx");

var ChallengeUnlocked = React.createClass({
  propTypes : {
    hideIn : React.PropTypes.number
  },

  getDefaultProps: function(){
    return {
      hideIn : 30 * 1000
    };
  },

  getInitialState: function(){
    return {
      hideUnlocked: false
    };
  },

  componentDidMount: function(){
    setTimeout(this._hideUnlocked, this.props.hideIn);
  },

  render: function(){
    return this._showUnlocked();
  },

  _showUnlocked: function(){
    if(this.state.hideUnlocked) {
      return null;
    }

    return (
      <div className="pt-challenge_unlocked" style={this.styles.challengeUnlocked}>
        <Icon icon="unlock" />
      </div>
    );
  },

  _hideUnlocked: function(){
    this.setState({
      hideUnlocked : true
    });
  },

  styles : {
    challengeUnlocked : {
      height: '30px',
      width: '30px',
      color: '#fff',
      textAlign: 'center',
      fontSize: '18px',
      padding: '5px 0px',
      backgroundColor: 'rgba(68, 68, 68, 0.6)', // $darker-grey with opacity change
      position: 'absolute',
      left: '0px',
      top: '0px',
      zIndex: '1'
    }
  }
});

module.exports = ChallengeUnlocked;
