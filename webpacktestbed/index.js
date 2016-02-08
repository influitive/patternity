import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classes from '!!style!css?modules!./test.css';
import Table, {Column, Cell} from '../src/table';

let items = [
  {
    id: 0,
    name: "yeah",
    description: "what the?"
  },
  {
    id: 1,
    name: "yeah 1",
    description: "what the?"
  },
  {
    id: 2,
    name: "yeah 2",
    description: "what the?"
  }
];

let selectedRows = [0, 2];

class App extends Component {

  render() {
    console.log(classes);
    return <div>
      <Table
        rowCount={items.length}
        rowStyle={{borderBottomColor: 'rgb(221, 221, 221)', borderBottomStyle: 'solid', borderBottomWidth: '1px'}}
        selectedRows={selectedRows}>
        <Column
          header={<Cell className={classes['id-cell']}>ID</Cell>}
          cell={function(rowIndex) {
            return (
              <Cell className={classes['id-cell']}>
                {items[rowIndex].id}
              </Cell>
            );
          }}
          />
        <Column
          header={<Cell className={classes['name-cell']}>Name</Cell>}
          cell={function(rowIndex) {
            return (
              <Cell className={classes['name-cell']}>
                {items[rowIndex].name}
              </Cell>);
          }}
        />
        <Column
          header={<Cell className={classes['desc-cell']}>Description</Cell>}
          cell={function(rowIndex) {
            return (<Cell className={classes['desc-cell']}>
              {items[rowIndex].description}
            </Cell>);
          }}
          />
      </Table>
    </div>;
  }
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))
