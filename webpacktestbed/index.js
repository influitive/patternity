import React, { Component } from 'react';

// Components
import Table, {Column, Cell} from '../src/table';

var data = [{
  id: 1,
  name: 'name'
}]

class App extends Component {

  render() {

    return (
      <Table
        rowCount={data.length}
        rowStyle={{}}
        headerStyle={{}}>
        <Column
          header={<Cell>Blah</Cell>}
          cell={function(rowIndex) {
            return (
              <Cell>
                {data[rowIndex].name}
              </Cell>
            );
          }}/>
        <Column
          header={<Cell>Blah</Cell>}
          cell={function(rowIndex) {
            return (
              <Cell>
                {data[rowIndex].name}
              </Cell>
            );
          }}/>
      </Table>
    );
  }
}

React.render(<App/>, document.getElementById('root'));
