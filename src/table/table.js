import React, {Component, PropTypes} from 'react';
import Row from './table-row';
import Header from './table-header';

export default class Table extends Component {
  static propTypes: {
    rowCount:    PropTypes.number.isRequired,
    rowStyle:    PropTypes.object,
    headerStyle: PropTypes.object
  }

  render() {
    return (
      <div className="pt-table" style={{display: 'table', width: '100%', borderCollapse: 'collapse'}}>
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
        if(column) {
          return React.cloneElement(column.props.header, {key: `table-header-cell-${index}`});
        }
      })
    );
  }

  _renderRows = () => {
    let rows = [];
    let row = null;
    for (var i=0; i<this.props.rowCount; i++) {

      row = React.Children.map(this.props.children, function(col, index) {
        if(col) {
          let cell = col.props.cell(i);
          return React.cloneElement(cell, {key: 'cell-'+index});
        }
      });
      rows.push(this._renderRow(row, i));
    }
    return rows;
  }

  _renderRow = (row, index) => {
    return (<Row key={'row-' + index} style={this.props.rowStyle}>{row}</Row>);
  }
}
