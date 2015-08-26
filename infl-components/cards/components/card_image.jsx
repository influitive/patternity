var React = require('react');

var CardImage = React.createClass({
  getDefaultProps : function(){
    return {
      image : null,
      onImageClick : function(){}
    };
  },
  PropTypes : {
    image : React.PropTypes.string,
    onImageClick : React.PropTypes.func
  },
  render : function(){
    return (
      <div className={"pt-challenge-image " + this._doesChallengeHaveAnImage()}  >
        <img src={this.props.image} alt="Challenge Image" onClick={this.props.onImageClick} />
      </div>
    );
  },
  _doesChallengeHaveAnImage : function(){
    return this.props.image ? "" : "no-image";
  }
});

module.exports = CardImage;
