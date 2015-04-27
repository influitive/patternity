var React = require('react');

var ModalDialog = React.createClass({
  getDefaultProps : function(){
    return {
      id : "",
      closeable : true,
      size : "medium",
      onClose : function(){},
      isModalOpen : false,
      scrollingBody : false,
      lightbox : true
    };
  },
  propTypes :{
    id : React.PropTypes.string,
    closeable : React.PropTypes.bool,
    size : React.PropTypes.oneOf(['small', 'medium', 'large']),
    scrollingBody : React.PropTypes.bool,
    lightbox : React.PropTypes.bool
  },
  getInitialState : function(){
    return {
      isModalOpen : this.props.isModalOpen
    };
  },
  componentWillReceiveProps : function(newProps){
    this.setState({
      isModalOpen : newProps.isModalOpen
    }, this._disableBodyScroll);
  },
  componentDidMount : function(){
    this._disableBodyScroll();
  },
  render : function(){
    return (
      <div className={"pt-modal-dialog  " + this._showModal() + " " + this._scrollingModalBody() + " " + this._lightbox()} onClick={this._closeDialog}>
        <section className={"pt-modal " + this.props.size}>
          <span className={"close-dialog ic ic-times " + this._isModalCloseable()} onClick={this._closeDialog}></span>
          {this.props.children}
        </section>
      </div>
    );
  },
  _isModalCloseable : function(){
    return this.props.closeable ? "" : "disable-close";
  },
  _scrollingModalBody : function(){
    return this.props.scrollingBody ? "scrollingBody" : "";
  },
  _disableBodyScroll : function(){
    if(this.state.isModalOpen){
      this._getBodyElement().style.overflow = "hidden";
    }
  },
  _lightbox : function(){
    return this.props.lightbox ? "lightbox" : "";
  },
  _showModal : function(){
    return this.state.isModalOpen ? "" : "close";
  },
  _closeDialog : function(event){
    if(this.props.closeable && this._isClosableElement(event.target)){
      this._dismissDialog();
    }
  },
  _isClosableElement : function(target){
    return target.className.indexOf("close-dialog") > -1 || target.className.indexOf("pt-modal-dialog") > -1;
  },
  _dismissDialog : function(){
    this.setState({
      isModalOpen : false
    }, this._onClose);
  },
  _onClose : function(){
    this.props.onClose();
    this._enableBodyScroll();
  },
  _enableBodyScroll : function(){
    this._getBodyElement().style.overflow = "auto";
  },
  _getBodyElement : function(){
    return document.getElementsByTagName('body')[0];
  }
});

ModalDialog.Header = React.createClass({
  getDefaultProps : function(){
    return {
      title : ""
    };
  },
  propTypes :{
    title : React.PropTypes.string
  },
  render : function(){
    return (
      <div className="pt-modal-header">
        <h3>{this.props.title}</h3>
      </div>
    );
  }
});

ModalDialog.Body = React.createClass({
  render : function(){
    return (
      <div className="pt-modal-body">
        {this.props.children}
      </div>
    );
  }
});

ModalDialog.Footer = React.createClass({
  render : function(){
    return (
      <div className="pt-modal-footer">
        {this.props.children}
      </div>
    );
  }
});

module.exports = ModalDialog;
