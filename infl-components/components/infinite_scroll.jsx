var React = require("react");
var $ = require('jquery');

var Loading = require("../loading");

var InfiniteScroll = React.createClass({
  PropTypes : {
    loadMore : React.PropTypes.func.isRequired,
    hasMore : React.PropTypes.bool,
    threshold : React.PropTypes.number,
    resetPageCount : React.PropTypes.bool,
    pageNumberStart : React.PropTypes.number,
  },

  getDefaultProps : function(){
    return {
      loadMore : function(){},
      hasMore : true,
      threshold : 500,
      resetPageCount : false,
      pageNumberStart : 0
    };
  },

  componentDidMount : function(){
    this._initializeInternalVariables();
    this._addScrollEventListener();
  },

  componentDidUpdate : function(){
    this._addScrollEventListener();
    this._resetPageCount();
  },

  componentWillUnmount : function(){
    this._removeScrollEventListener();
  },

  render : function(){
    return (
      <div ref="infiniteScroll" className="pt-infinite-scroll">
        {this.props.children}
        {this._moreToLoad()}
      </div>
    );
  },

  _initializeInternalVariables : function(){
    this.pageNumber = this.props.pageNumberStart;
    this.addWindowSrollEvent = true;
  },

  _resetPageCount : function(){
    if(this.props.resetPageCount) {
      this.pageNumber = this.props.pageNumberStart;
    }
  },

  _addScrollEventListener : function(){
    if(this.addWindowSrollEvent && this.props.hasMore) {
      $(window).scroll(this._onWindowScroll);
      this.addWindowSrollEvent = false;
    }
  },

  _onWindowScroll : function(){
    if(this._loadMore()){
      this._removeScrollEventListener();
      this.props.loadMore(this.pageNumber += 1);
    }
  },

  _removeScrollEventListener : function(){
    this.addWindowSrollEvent = true;
    $(window).unbind('scroll');
  },

  _loadMore : function(){
    var infiniteScroll = React.findDOMNode(this.refs.infiniteScroll);

    var offsetTop = infiniteScroll.offsetTop;
    var height = infiniteScroll.clientHeight;
    var windowScroll = window.pageYOffset ? window.pageYOffset : $(window).scrollTop();
    var windowHeight = window.innerHeight ? innerHeight : $(window).height();

    if((offsetTop + height - windowScroll - windowHeight) < this.props.threshold) {
      return true;
    }

    return false;
  },

  _moreToLoad : function(){
    return this.props.hasMore ? <Loading isBlock={true} /> : null;
  }
});

module.exports = InfiniteScroll;
