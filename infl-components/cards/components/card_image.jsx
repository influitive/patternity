var React = require('react');
var $ = require('jquery');
var Loading = require('../../loading.jsx');

var widthAspectRatio = 9 / 16;

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
      this._optomizeForWidth(image);
    } else {
      this._optimizeForHeight(image);
    }

    if(this._isImageHeightOutOfContainer(image)){
      this._optimizeForHeight(image);
    }

    this._adjustImageContainerHeight();
  },

  _isImageHeightOutOfContainer: function(image){
    var imagePos = image.getBoundingClientRect();
    var imageContainerPos = React.findDOMNode(this.refs.imageContainer).getBoundingClientRect();

    return imagePos.bottom > imageContainerPos.bottom;
  },

  _hideLoading : function () {
    this.setState({
      isLoading :  false
    });
  },

  _optomizeForWidth: function(image){
    this._updateImageStyling(image, '100%', 'initial', 'middle');
  },

  _optimizeForHeight: function(image){
    this._updateImageStyling(image, 'initial', '100%', 'initial');
  },

  _updateImageStyling : function (image, width, height, verticalAlign) {
    image.style.height = height;
    image.style.width = width;
    this._updateVerticalAlign(image, verticalAlign);
    $(image).addClass('loaded');
  },

  _updateVerticalAlign : function (image, verticalAlign) {
    if(this._imageIsNotAspectRatio(image)) {
      image.style.verticalAlign = verticalAlign;
    } else {
      image.style.verticalAlign = 'initial';
    }
  },

  _imageIsNotAspectRatio : function (image) {
    return this._roundToTwoDecimals(image.naturalHeight / image.naturalWidth) !== this._roundToTwoDecimals(widthAspectRatio);
  },

  _roundToTwoDecimals : function (num) {
    return Math.round(num * 100) / 100;
  },

  _adjustImageContainerHeight : function () {
    var imageContainer = React.findDOMNode(this.refs.imageContainer);

    imageContainer.style.height =  Math.round(widthAspectRatio * imageContainer.offsetWidth) + "px";
    imageContainer.style.lineHeight =  Math.round(widthAspectRatio * imageContainer.offsetWidth) + "px";
  },

  _addWindowResizeEvent : function(){
    $(window).resize(this._adjustImageContainerHeight);
  },

  _removeWindowResizeEvent: function(){
    $(window).off("resize", this._adjustImageContainerHeight);
  }

});

module.exports = CardImage;
