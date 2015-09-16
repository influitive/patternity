var React = require('react');
var $ = require('jquery');
var Loading = require('../../loading.jsx');

var CardImage = React.createClass({
  PropTypes : {
    image : React.PropTypes.string,
    onImageClick : React.PropTypes.func
  },

  getDefaultProps : function(){
    return {
      image : null,
      onImageClick : function(){}
    };
  },

  getInitialState : function () {
    return {
      image : this.props.image,
      isLoading : true
    };
  },

  componentWillReceiveProps : function (nextProps) {
    this.setState({
      image : nextProps.image,
      isLoading : nextProps.image !== this.props.image || this.state.isLoading
    });
  },

  componentDidMount : function () {
    this._addImageLoadEvent();
    this._addWindowResizeEvent();
  },

  componentDidUpdate : function(){
    this._adjustImageContainerHeight();
  },

  componentWillUnmount: function(){
    this._removeWindowResizeEvent();
  },

  render : function(){
    return (
      <div className={"pt-challenge-image " + this._doesChallengeHaveAnImage()}  ref="imageContainer">
        {this._showLoading()}
        <img ref="image" src={this.state.image} alt="Challenge Image" onClick={this.props.onImageClick} />
      </div>
    );
  },

  _doesChallengeHaveAnImage : function(){
    return this.props.image ? "" : "no-image";
  },

  _showLoading : function(){
    if(!this.state.isLoading) {
      return null;
    }

    return <Loading />
  },

  _addImageLoadEvent : function(){
    var image = React.findDOMNode(this.refs.image);
    image.onload = this._optimizeImageVisibility;
  },

  _optimizeImageVisibility : function (event) {
    this._hideLoading();
    var image = event.target;

    if(image.naturalWidth > image.naturalHeight){
      this._updateImageStyling(image, '100%', 'initial');
    } else {
      this._updateImageStyling(image, 'initial', '100%');
    }

    this._adjustImageContainerHeight();
  },

  _hideLoading : function () {
    this.setState({
      isLoading :  false
    });
  },

  _updateImageStyling : function (image, width, height) {
    image.style.height = height;
    image.style.width = width;
    $(image).addClass('loaded');
  },

  _adjustImageContainerHeight : function () {
    var widthAspectRatio = 9 / 16;
    var imageContainer = React.findDOMNode(this.refs.imageContainer);

    imageContainer.style.height =  widthAspectRatio * imageContainer.offsetWidth + "px";
    imageContainer.style.lineHeight =  widthAspectRatio * imageContainer.offsetWidth + "px";
  },

  _addWindowResizeEvent : function(){
    $(window).resize(this._adjustImageContainerHeight);
  },

  _removeWindowResizeEvent: function(){
    $(window).off("resize", this._adjustImageContainerHeight);
  }

});

module.exports = CardImage;
