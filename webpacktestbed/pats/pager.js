import React, { Component } from 'react';

import Alert from '../../lib/pager';

export default class PagerPat extends Component {
  render() {
    return (<Pager     currentPage={0} perPage={10} totalItemCount={1}: PropTypes.number.isRequired
              onPageChangeCallback={()=>{}}
    />
    );
  }
}

