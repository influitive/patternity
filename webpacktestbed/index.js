import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DatePicker from '../src/date-picker';

class App extends Component {

  render() {
    return (
      <DatePicker showTime={true} onChange={(date)=>{console.log(date);}}/>
    );
  }

  _handleClickOut = () => {
    this.setState({
      isOpen: false
    })
  }

  _alert = () => {
    alert('test');
  }
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))
