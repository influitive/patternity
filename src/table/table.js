import React, {Component, PropTypes} from 'react';
import Row from './table-row';
import Header from './table-header';

import classes from '../../infl-styles/table.css';

export default class Table extends Component {
  static propTypes = {
    rowCount:       PropTypes.number.isRequired,
    rowStyle:       PropTypes.object,
    headerStyle:    PropTypes.object,
    selectedRows:   PropTypes.array,
    rowReplacement: PropTypes.func
  }

  static defaultProps = {
    rowStyle: {},
    headerStyle: {},
    selectedRows: [],
    rowReplacement: () => { return false;}
  }

  render() {
    return (
      <div className={classes.table}>
        <Header style={this.props.headerStyle}>
          {this._renderHeader()}
        </Header>
        {this._renderRows()}
      </div>
    );
  }


  _renderHeader = () => {
    return (
      React.Children.map(this.props.children, function(column, index) {
        if (column) {
          return React.cloneElement(column.props.header,
            {
              key: `table-header-cell-${index}`
            });
        }
      })
    );
  }

  _renderRows = () => {
    let rows = [];
    let row = null;
    const {rowCount, children, rowReplacement} = this.props;

    for (var i=0; i<rowCount; i++) {
      row = rowReplacement(i);
      if (!row) {
        row = React.Children.map(children, function(col, index) {
          if (col) {
            const cell = col.props.cell(i);
            return React.cloneElement(cell, {key: 'cell-'+index});
          }
        });
      }
      rows.push(this._renderRow(row, i));
    }
    return rows;
  }

  _renderRow = (row, index) => {
    return (
      <Row key={'row-' + index} className={this._selectedRow(index)} style={this.props.rowStyle}>
        {row}
      </Row>
    );
  }

  _selectedRow = (index) => {
    return this.props.selectedRows.indexOf(index) > -1 ? ' selected' : '';
  }
}
