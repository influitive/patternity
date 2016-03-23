import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SimplifiedPager from '../src/simplified-pager';
import style from '../src/simplified-pager/simplified-pager.scss';

const items = [1,2,3,4,5,6,7,8,9,10];

class App extends Component {

  state = {
    currentPage: 1
  }

  render() {
    return (
      <SimplifiedPager
        currentPage={window.Number(this.state.currentPage)}
        perPage={2}
        totalItemCount={items.length}
        onPageChangeCallback={this._handlePageChange} />
    );
  }

  _handlePageChange = (pageIndex) => {
    this.setState({
      currentPage: pageIndex
    })
  }
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))
