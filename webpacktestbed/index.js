import React, { Component } from 'react';

// Components
import Button from '../src/button2';
import ButtonDropdown from '../src/button-dropdown';
import SplitButtonDropdown from '../src/split-button-dropdown';

// Styles
import '../infl-styles/_all.scss';

class App extends Component {

  render() {

    const containerStyle = {
      textAlign: 'center',
      width: '100%',
      minHeight: '420px',
      margin: '20px',
    }

    const rowStyle = {
      verticalAlign: 'top',
      marginPadding: '10px',
    }

    return (
      <table style={containerStyle}>
        <tbody>
          <tr style={rowStyle}>
            <td>
              <Button
                type="">
                Click me
              </Button>
            </td>
            <td>
              <ButtonDropdown
                title="Click me"
                type="">
                <a href="#">Click</a>
                <a href="#">Me</a>
              </ButtonDropdown>
            </td>
            <td>
              <SplitButtonDropdown
                title="Click me"
                type="">
                <a href="#"><i className="ic ic-mail"></i>Opt 1</a>
                <a href="#">Opt 2</a>
              </SplitButtonDropdown>
            </td>
          </tr>
          <tr style={rowStyle}>
            <td>
              <Button
                type="primary">
                Click me
              </Button>
            </td>
            <td>
              <ButtonDropdown
                title="Click me"
                type="primary">
                <a href="#">Click</a>
                <a href="#">Me</a>
              </ButtonDropdown>
            </td>
            <td>
              <SplitButtonDropdown
                title="Click me"
                type="primary">
                <a href="#"><i className="ic ic-mail"></i>Opt 1</a>
                <a href="#">Opt 2</a>
              </SplitButtonDropdown>
            </td>
          </tr>
          <tr style={rowStyle}>
            <td>
              <Button
                type="secondary">
                Click me
              </Button>
            </td>
            <td>
              <ButtonDropdown
                title="Click me"
                type="secondary">
                <a href="#">Click</a>
                <a href="#">Me</a>
              </ButtonDropdown>
            </td>
            <td>
              <SplitButtonDropdown
                title="Click me"
                type="secondary">
                <a href="#"><i className="ic ic-mail"></i>Opt 1</a>
                <a href="#">Opt 2</a>
              </SplitButtonDropdown>
            </td>
          </tr>
          <tr style={rowStyle}>
            <td>
              <Button
                type="success">
                Click me
              </Button>
            </td>
            <td>
              <ButtonDropdown
                title="Click me"
                type="success">
                <a href="#">Click</a>
                <a href="#">Me</a>
              </ButtonDropdown>
            </td>
            <td>
              <SplitButtonDropdown
                title="Click me"
                type="success">
                <a href="#">Opt 1</a>
                <a href="#">Opt 2</a>
              </SplitButtonDropdown>
            </td>
          </tr>
          <tr style={rowStyle}>
            <td>
              <Button
                type="danger">
                Click me
              </Button>
            </td>
            <td>
              <ButtonDropdown
                title="Click me"
                type="danger">
                <a href="#">Click</a>
                <a href="#">Me</a>
              </ButtonDropdown>
            </td>
            <td>
              <SplitButtonDropdown
                title="Click me"
                type="danger">
                <a href="#"><i className="ic ic-mail"></i>Opt 1</a>
                <a href="#">Opt 2</a>
              </SplitButtonDropdown>
            </td>
          </tr>
          <tr style={rowStyle}>
            <td>
              <Button
                type="important">
                Click me
              </Button>
            </td>
            <td>
              <ButtonDropdown
                title="Click me"
                type="important">
                <a href="#">Click</a>
                <a href="#">Me</a>
              </ButtonDropdown>
            </td>
            <td>
              <SplitButtonDropdown
                title="Click me"
                type="important">
                <a href="#"><i className="ic ic-mail"></i>Opt 1</a>
                <a href="#">Opt 2</a>
              </SplitButtonDropdown>
            </td>
          </tr>
          <tr style={rowStyle}>
            <td>
              <Button
                type="text">
                Click me
              </Button>
            </td>
            <td>
              <ButtonDropdown
                title="Click me"
                type="text">
                <a href="#">Click</a>
                <a href="#">Me</a>
              </ButtonDropdown>
            </td>
            <td>
              <SplitButtonDropdown
                title="Click me"
                type="text">
                <a href="#"><i className="ic ic-mail"></i>Opt 1</a>
                <a href="#">Opt 2</a>
              </SplitButtonDropdown>
            </td>
          </tr>
          <tr style={rowStyle}>
            <td>
              <Button
                type="primary"
                disabled="true">
                Disabled
              </Button>
            </td>
            <td>
              <ButtonDropdown
                title="Disabled"
                type="primary"
                disabled="true">
                <a href="#">Click</a>
                <a href="#">Me</a>
              </ButtonDropdown>
            </td>
            <td>
              <SplitButtonDropdown
                title="Disabled"
                type="primary"
                disabled="true">
                <a href="#"><i className="ic ic-mail"></i>Opt 1</a>
                <a href="#">Opt 2</a>
              </SplitButtonDropdown>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

React.render(<App/>, document.getElementById('root'));
