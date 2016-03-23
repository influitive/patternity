import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Button from '../../lib/button2';
import SelectDropDown from '../../lib/select_dropdown';

export default class SimplifiedPager extends Component {

  static propTypes = {
    /**
     * The current page number (starting at 1).
     */
    currentPage: PropTypes.number.isRequired,
    /**
     * The number of items that are displayed in each page.
     */
    perPage: PropTypes.number,
    /**
     * The total number of items that are available.
     */
    totalItemCount: PropTypes.number.isRequired,
    /**
     * This callback is called when the user navigates to a different page. It
     * has a single argument which is the new page number.
     */
    onPageChangeCallback: PropTypes.func.isRequired,
    /**
     * The classname of the page element that is currenting displayed.
     */
    selectedClassName: PropTypes.string
  };

  static defaultProps = {
    perPage:           10,
    selectedClassName: ''
  };

  render() {
    const {currentPage} = this.props;
    const totalPageCount = this._getTotalPageCount();
    return (
      <div className='pt-simplified-pager' {...this.props}>
        <Button
          icon='chevron-left'
          type="secondary"
          onClick={this._handleClick.bind(null, currentPage-1)}
          classList={classnames('pt-previous-page', { disabled: currentPage == 1})}></Button>

        <SelectDropDown
            onChange={this._handleChange}
            value={window.String(this.props.currentPage)}>
          {this._getPageOptions()}
        </SelectDropDown>


        <Button
          icon='chevron-right'
          type="secondary"
          onClick={this._handleClick.bind(null, currentPage+1)}
          classList={classnames('pt-next-page', { disabled: currentPage == totalPageCount})}></Button>
      </div>
    );
  }

  _getPageOptions = () => {
    const totalPageCount = this._getTotalPageCount();
    let pages = [];

    for (let i = 1; i <= totalPageCount; i++) {
      pages.push(
        <option value={i} key={i}>Page {i}</option>
      );
    }

    return pages;
  }

  _handleClick = (pageNum) => {
    const { currentPage } = this.props;
    const shouldChange = pageNum > 0 &&
      pageNum <= this._getTotalPageCount() &&
      pageNum !== currentPage;

    if (shouldChange) {
      this.props.onPageChangeCallback(pageNum);
    }
  }

  _handleChange = (event) => {
    this._handleClick(event.target.value);
  }

  _getTotalPageCount = () => {
    const { totalItemCount, perPage } = this.props;
    return Math.ceil(totalItemCount / perPage);
  }
}
