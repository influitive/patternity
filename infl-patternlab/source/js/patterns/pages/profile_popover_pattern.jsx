var React = require('react');
var Popover = require('../../../../infl-components/popover');
var SaveButton = require('../../../../infl-components/save-button');

var ProfilePopoverPattern = React.createClass({
  getInitialState: function() {
    return {
      saveStatus: 'unsaved'
    }
  },
  render: function() {
    return <div style={{textAlign: 'center'}}>
      <SaveButton onClick={this.saveStatus} saveStatus={this.state.saveStatus}/>
    </div>;
  },
  saveStatus() {
    if (this.state.saveStatus === 'unsaved') this.setState({saveStatus: 'saving'});
    setTimeout(function() {
      this.setState({saveStatus: 'error'});
    }.bind(this), 1000);
  }
});

module.exports = ProfilePopoverPattern;
