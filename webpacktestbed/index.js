import React, { Component } from 'react';
import ReactDOM from 'react-dom';
<<<<<<< 33ea029974b6f794f6126b75de6b72ce60147328
import classes from '!!style!css?modules!./test.css';
import Table, {Column, Cell} from '../src/table';
=======

import Tagger from '../lib/tagger';
>>>>>>> Make tag a seperate component from tagger

import '../infl-styles/_tagger.scss';
import '../infl-fonts/influicons.css';
import '../infl-fonts/influicons.eot';

class App extends Component {
<<<<<<< 33ea029974b6f794f6126b75de6b72ce60147328
=======
  state = {
    tags: ['tag1', 'tag2']
  }
>>>>>>> Make tag a seperate component from tagger

  render() {
    console.log(classes);
    return <div>
<<<<<<< 33ea029974b6f794f6126b75de6b72ce60147328
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
=======
      <Tagger tags={this.getTags()} onTagged={this.tagIt}/>
>>>>>>> Make tag a seperate component from tagger
    </div>;
  }

  getTags = () => {
    if (this.state)
      return this.state.tags;
    else
      return [];
  }

  tagIt = (tag) => {
    let cTags = this.state.tags || [];
    cTags.push(tag);
    this.setState({tags: cTags});
  }
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))
