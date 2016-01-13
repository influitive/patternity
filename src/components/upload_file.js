const React = require('react');
const uploadFile = require('../utilities/upload_file');

class UploadFile extends React.Component {
  static displayName = 'UploadFile'

  static propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.object,
      React.PropTypes.array
    ]).isRequired,

    onSuccess: React.PropTypes.func.isRequired,
    withCrop:  React.PropTypes.bool,
    cropRatio: React.PropTypes.number,

    compressFileOptions: React.PropTypes.oneOfType([
      React.PropTypes.bool,
      React.PropTypes.object
    ]),

    apiKey:  React.PropTypes.string.isRequired,
    version: React.PropTypes.string
  }

  static defaultProps = {
    withCrop:            false,
    cropRatio:           undefined,
    compressFileOptions: false,
    version:             'v2'
  }

  componentWillMount() {
    uploadFile.init(this.props.apiKey, this.props.version);
  }

  render() {
    return <span className="pt-file-upload" ref="fileUpload" onClick={this._handleClick}>
      {this.props.children}
    </span>;
  }

  _handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (this.props.withCrop) {
      uploadFile.uploadWithCrop(this.props.onSuccess, this.props.cropRatio);
    } else if (this.props.compressFileOptions !== false) {
      uploadFile.uploadAndCompress(this.props.onSuccess, this.props.compressFileOptions);
    } else {
      uploadFile.upload(this.props.onSuccess);
    }
  }
}

export default UploadFile;
