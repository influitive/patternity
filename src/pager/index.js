import React, { Component, PropTypes } from 'react';
import Icon from '../../infl-components/icon.jsx';
import classnames from 'classnames';
import _ from 'lodash';

const MOVING_WINDOW_SIZE = 5;
const EDGE_WINDOW_SIZE = 2;

export default class Pager extends Component {

  static propTypes = {
    /**
     * The current page number (starting at 1).
     */
    currentPage:          PropTypes.number.isRequired,
    /**
     * The number of items that are displayed in each page.
     */
    perPage:              PropTypes.number,
    /**
     * The total number of items that are available.
     */
    totalItemCount:       PropTypes.number.isRequired,
    /**
     * This callback is called when the user navigates to a different page. It
     * has a single argument which is the new page number.
     */
    onPageChangeCallback: PropTypes.func.isRequired,
    /**
     * The classname of the page element that is currenting displayed.
     */
    selectedClassName:    PropTypes.string
  };

  static defaultProps = {
    perPage:           10,
    selectedClassName: ''
  };

  render() {
    const {currentPage} = this.props;
    const totalPageCount = this._getTotalPageCount();
    return (
      <div className='pt-pager' {...this.props}>
        <span className={classnames('pt-previous-page', { disabled: currentPage == 1})} onClick={this._handleClick.bind(null, currentPage-1)}>
          <Icon icon='chevron-left'/>
        </span>
        {this._getPageNumbers()}
        <span className={classnames('pt-next-page', { disabled: currentPage == totalPageCount})}  onClick={this._handleClick.bind(null, currentPage+1)}>
          <Icon icon='chevron-right'/>
        </span>
      </div>
    );
  }

  _getPageNumbers2 = () => {
    const { currentPage } = this.props;
    const totalPageCount = this._getTotalPageCount();

    const leftSideOfWindow = Math.max(currentPage - Math.floor(MOVING_WINDOW_SIZE/2), 1);
    let pages = _.range(leftSideOfWindow, Math.min(leftSideOfWindow+MOVING_WINDOW_SIZE, totalPageCount)+1);

    let leftFiller = _.range(1, Math.min(EDGE_WINDOW_SIZE, pages[0])+1)
    if (pages[0] > EDGE_WINDOW_SIZE + 1) {
      leftFiller.push(-1);
    }
    let rightFiller = [];
    if ( pages[pages.length-1] < totalPageCount - EDGE_WINDOW_SIZE) {
      rightFiller.push(-1);
    }

    rightFiller = rightFiller.concat(_.range(Math.max(currentPage + Math.floor(MOVING_WINDOW_SIZE/2), totalPageCount - EDGE_WINDOW_SIZE ), totalPageCount+1));

    return leftFiller.concat(pages).concat(rightFiller).map(page => {
      // If it's -1, it's an ellipsised section.
      if (page === -1) {
        return this._getEllipsis();
      }
      return this._getSpanForPage(page);
    });
  }

  _getPageNumbers = () => {
    //TODO: Optimize algorithm. Currently performs very poorly under high page numbers.
    const { currentPage } = this.props;
    const totalPageCount = this._getTotalPageCount();

    let pages = _.range(1, totalPageCount+1);

    const simulatedCurrentPageIndex = this._getSimulatedCurrentPageIndex(currentPage - 1, totalPageCount);
    this._replaceIndexesFromRight(pages, simulatedCurrentPageIndex, totalPageCount);
    this._replaceIndexesFromLeft(pages, simulatedCurrentPageIndex);

    return pages.map(page => {
      // If it's -1, it's an ellipsised section.
      if (page === -1) {
        return this._getEllipsis();
      }
      return this._getSpanForPage(page);
    })
  }

  _replaceIndexesFromRight = (pages, simulatedCurrentPageIndex, totalPageCount) => {
    const secondEllipsisStartIndex = simulatedCurrentPageIndex + Math.ceil(MOVING_WINDOW_SIZE/2);
    const secondEllipsisCount = (totalPageCount - EDGE_WINDOW_SIZE) - secondEllipsisStartIndex

    // Remove and replace any pages that will be ellipsed with -1
    if (secondEllipsisCount > 0) {
      pages.splice(secondEllipsisStartIndex, secondEllipsisCount, -1);
    }
  }

  _replaceIndexesFromLeft = (pages, simulatedCurrentPageIndex) => {
    const firstEllipsisStartIndex = EDGE_WINDOW_SIZE;
    const firstEllipsisCount = (simulatedCurrentPageIndex - Math.floor(MOVING_WINDOW_SIZE/2)) - firstEllipsisStartIndex;

    if (firstEllipsisCount > 0) {
      pages.splice(firstEllipsisStartIndex, firstEllipsisCount, -1).length;
    }
  }

  _getSimulatedCurrentPageIndex = (currentPageIndex, totalPageCount) => {
    // The simulated current page is required to make sure that we always show at least 5 numbers around
    // the current page (even if current page is in the extremes)
    let simulatedCurrentPageIndex = currentPageIndex;
    if (currentPageIndex < EDGE_WINDOW_SIZE) {
      simulatedCurrentPageIndex = EDGE_WINDOW_SIZE;
    }
    else if (currentPageIndex > totalPageCount - EDGE_WINDOW_SIZE - 1) {
      simulatedCurrentPageIndex = totalPageCount - EDGE_WINDOW_SIZE - 1;
    }
    return simulatedCurrentPageIndex;
  }

  _getSpanForPage = (pageNum) => {
    const {currentPage, selectedClassName} = this.props;
    const classes = classnames('pt-page-element', currentPage === pageNum && selectedClassName );

    return <span className={classes} onClick={this._handleClick.bind(null, pageNum)}>{pageNum}</span>;
  }

  _getEllipsis() {
    return (<span>...</span>);
  }

  _handleClick = (pageNum) => {
    const { currentPage, onPageChangeCallback } = this.props;
    const shouldChange = pageNum > 0 &&
      pageNum <= this._getTotalPageCount() &&
      pageNum !== currentPage;

    if (shouldChange) {
      this.props.onPageChangeCallback(pageNum);
    }
  }

  _getTotalPageCount = () => {
    const { totalItemCount, perPage } = this.props;
    return Math.ceil(totalItemCount / perPage);
  }
}
