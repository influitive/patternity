var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');
var Code      = require('../../patternlab-components/code.jsx');
var Require   = require('../../patternlab-components/require.jsx');

var ToggleSwitch = require('../../../../infl-components/toggle_switch.jsx');


var ToggleSwitchPattern = React.createClass({

  getInitialState: function() {
    return {
      toggleOn: true
    }
  },

  render: function() {
    return <div className='toggle-switch-pattern'>
      <Pattern title='toggle switch'>
        <p>The toggle switch form element can be used in place of a checkbox to better visually indicate that a feature is turned on or off.  It should be used only for enabling or disabling features, and should not be used within a form that requires a submit action.  It should save or update data as it changes.</p>
        <p>It has two states enabled and disabled</p>
        <Pattern.Detail title='Toggle Switch'>
          <Pattern.Show>
            <ToggleSwitch isOn={this.state.toggleOn} onChange={this._toggleHandler} />
          </Pattern.Show>
          <Code>
            <Code.JSX>
              &lt;ToggleSwitch isOn='false' enabled='true' onChange='callback_function' inputName='form_element_name' /&gt;
            </Code.JSX>
            <Code.WithoutJSX patternName='ToggleSwitch' />
            <Code.Props patternProps={this._buildToggleSwitchProps()} />
          </Code>
        </Pattern.Detail>

        <Require>
          <Require.JS>
            var ToggleSwitch = require('patternity/infl-components/toggle_switch.jsx');
          </Require.JS>
          <Require.CSS>
            @import 'patternity/infl-styles/toggle_switch';
          </Require.CSS>
        </Require>
      </Pattern>
    </div>;
  },

  _toggleHandler: function() {
    this.setState({toggleOn: !this.state.toggleOn});
  },

  _buildToggleSwitchProps: function() {
    return {
      id: {
        type:         'string',
        defaultValue: '',
        required:     false,
        description:  'Id for the internal checkbox.'
      },
      enabled: {
        type:         'boolean',
        defaultValue: 'true',
        required:     false,
        description:  'Determines if the switch is enabled or disabled.'
      },
      isOn: {
        type:         'boolean',
        defaultValue: 'false',
        required:     false,
        description:  'Is the on/off state of the toggle.'
      },
      onChange: {
        type:         'function',
        defaultValue: 'empty function',
        required:     false,
        description:  'The onChange will be called with the current state of enabled as a boolean.'
      },
      inputName: {
        type:         'string',
        defaultValue: '',
        required:     false,
        description:  'Name of the checkbox input to be used in a form.'
      }
    };
  }
});

module.exports = ToggleSwitchPattern;
