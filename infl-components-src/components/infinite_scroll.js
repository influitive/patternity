const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');

const Loading = require('../loading');

class InfiniteScroll extends React.Component {
  static displayName = 'InfiniteScroll'

  static defaultProps = {
    loadMore:        function() {},
    hasMore:         true,
    threshold:       500,
    resetPageCount:  false,
    pageNumberStart: 0
  }

  static propTypes = {
    loadMore:        React.PropTypes.func.isRequired,
    hasMore:         React.PropTypes.bool,
    threshold:       React.PropTypes.number,
    resetPageCount:  React.PropTypes.bool,
    pageNumberStart: React.PropTypes.number,
  }

  componentDidMount() {
    this._initializeInternalVariables();
    this._addScrollEventListener();
  }

  componentDidUpdate() {
    this._addScrollEventListener();
    this._resetPageCount();
  }

  componentWillUnmount() {
    this._removeScrollEventListener();
  }

  render() {
    return <div ref="infiniteScroll" className="pt-infinite-scroll">
      {this.props.children}
      {this._moreToLoad()}
    </div>;
  }

  _initializeInternalVariables() {
    this.pageNumber = this.props.pageNumberStart;
    this.addWindowSrollEvent = true;
  }

  _resetPageCount() {
    if (!this.props.resetPageCount) return;
    this.pageNumber = this.props.pageNumberStart;
  }

  _addScrollEventListener() {
    if (!this.addWindowSrollEvent || !this.props.hasMore) return;
    $(window).on('scroll', this._onWindowScroll);
    this.addWindowSrollEvent = false;
  }

  _onWindowScroll = () => {
    if (!this._loadMore()) return;
    this._removeScrollEventListener();
    this.props.loadMore(this.pageNumber += 1);
  }

  _removeScrollEventListener() {
    this.addWindowSrollEvent = true;
    $(window).unbind('scroll');
  }

  _loadMore() {
    const infiniteScroll = ReactDOM.findDOMNode(this.refs.infiniteScroll);

    const offsetTop = infiniteScroll.offsetTop;
    const height = infiniteScroll.clientHeight;
    const windowScroll = window.pageYOffset ? window.pageYOffset : $(window).scrollTop();
    const windowHeight = window.innerHeight ? innerHeight : $(window).height();

    if ((offsetTop + height - windowScroll - windowHeight) < this.props.threshold) return true;

    return false;
  }

  _moreToLoad() {
    return this.props.hasMore ? <Loading isBlock={true} /> : null;
  }
}

export default InfiniteScroll;
