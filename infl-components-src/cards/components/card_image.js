const React = require('react');
const $ = require('jquery');
const Loading = require('../../loading');

const widthAspectRatio = 9 / 16;

class CardImage extends React.Component {
  static propTypes = {
    image:        React.PropTypes.string,
    onImageClick: React.PropTypes.func
  }

  static defaultProps = {
    image:        null,
    onImageClick: function() {}
  }

  state = {
    image:     props.image,
    isLoading: true
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      image:     nextProps.image,
      isLoading: nextProps.image !== this.props.image || this.state.isLoading
    });
  }

  componentDidMount() {
    this._addImageLoadEvent();
    this._addWindowResizeEvent();
  }

  componentDidUpdate() {
    this._adjustImageContainerHeight();
  }

  componentWillUnmount() {
    this._removeWindowResizeEvent();
  }

  render() {
    return (
      <div className={'pt-challenge-image ' + this._doesChallengeHaveAnImage()}  ref="imageContainer">
        {this._showLoading()}
        <img ref="image" src={this.state.image} alt="Challenge Image" onClick={this.props.onImageClick} />
      </div>
    );
  }

  _doesChallengeHaveAnImage() {
    return this.props.image ? '' : 'no-image';
  }

  _showLoading() {
    if (!this.state.isLoading) return null;
    return <Loading />
  }

  _addImageLoadEvent() {
    const image = React.findDOMNode(this.refs.image);
    const self = this;
    image.onload = function(event) {
      const image = event ? event.target : this; //IE8 doesn't get the proper event target
      self._optimizeImageVisibility(image);
    };
  }

  _optimizeImageVisibility(image) {
    this._hideLoading();

    if (image.naturalWidth > image.naturalHeight) {
      this._optomizeForWidth(image);
    } else {
      this._optimizeForHeight(image);
    }

    if (this._isImageHeightOutOfContainer(image)) {
      this._optimizeForHeight(image);
    }

    this._adjustImageContainerHeight();
  }

  _isImageHeightOutOfContainer(image) {
    const imagePos = image.getBoundingClientRect();
    const imageContainerPos = React.findDOMNode(this.refs.imageContainer).getBoundingClientRect();

    return imagePos.bottom > imageContainerPos.bottom;
  }

  _hideLoading() {
    this.setState({
      isLoading: false
    });
  }

  _optomizeForWidth(image) {
    this._updateImageStyling(image, '100%', 'auto', 'middle');
  }

  _optimizeForHeight(image) {
    this._updateImageStyling(image, 'auto', '100%', 'top');
  }

  _updateImageStyling(image, width, height, verticalAlign) {
    image.style.height = height;
    image.style.verticalAlign = verticalAlign;
    this._updateWidth(image, width);
    $(image).addClass('loaded');
  }

  _updateWidth(image, width) {
    if (this._imageIsNotAspectRatio(image)) {
      image.style.width = width;
    } else {
      image.style.width = '100%';
    }
  }

  _imageIsNotAspectRatio(image) {
    return this._roundToTwoDecimals(image.naturalHeight / image.naturalWidth) !== this._roundToTwoDecimals(widthAspectRatio);
  }

  _roundToTwoDecimals(num) {
    return Math.round(num * 100) / 100;
  }

  _adjustImageContainerHeight = () => {
    const imageContainer = React.findDOMNode(this.refs.imageContainer);

    imageContainer.style.height =  Math.round(widthAspectRatio * imageContainer.offsetWidth) + 'px';
    imageContainer.style.lineHeight =  Math.round(widthAspectRatio * imageContainer.offsetWidth) + 'px';
  }

  _addWindowResizeEvent() {
    $(window).resize(this._adjustImageContainerHeight);
  }

  _removeWindowResizeEvent() {
    $(window).off('resize', this._adjustImageContainerHeight);
  }
}

export default CardImage;
