import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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
    return <div>
      <Table
        rowCount={items.length}
        rowStyle={{borderBottomColor: 'rgb(221, 221, 221)', borderBottomStyle: 'solid', borderBottomWidth: '1px'}}
        selectedRows={selectedRows}>
        <Column
          header={<Cell style={{padding: '10px'}}>ID</Cell>}
          cell={function(rowIndex) {
            return (
              <Cell style={{maxWidth: '60px', padding: '20px 0px', textAlign: 'center'}}>
                {items[rowIndex].id}
              </Cell>
            );
          }}
          />
        <Column
          header={<Cell style={{padding: '10px'}}>Name</Cell>}
          cell={function(rowIndex) {
            return (
              <Cell style={{maxWidth: '100px', padding: '0px 20px', maxHeight: "75px"}}>
                {items[rowIndex].name}
              </Cell>);
          }}
        />
        <Column
          header={<Cell style={{padding: '10px'}}>Description</Cell>}
          cell={function(rowIndex) {
            return (<Cell style={{textAlign: 'center', padding: '0px 20px', width: '1%'}}>
              {items[rowIndex].description}
            </Cell>);
          }}
          />
      </Table>
    </div>;
  }
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))
