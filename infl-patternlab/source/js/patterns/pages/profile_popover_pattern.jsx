var React = require('react');
var Popover = require('../../../../lib/popover');
var SaveButton = require('../../../../lib/save-button');
var Accordion = require('../../../../lib/accordion');

var ProfilePopoverPattern = React.createClass({
  getInitialState: function() {
    return {
      saveStatus: 'unsaved'
    }
  },
  render: function() {
    var text = {
      unsaved: 'SaveMe',
      saved:   'It is done.',
      saving:  'Tra la la',
      error:   'Damnit'
    };
    return <div style={{textAlign: 'center'}}>
      <SaveButton onClick={this.saveStatus} saveStatus={this.state.saveStatus} text={text}/>
    </div>;
  },
  saveStatus() {
    if (this.state.saveStatus === 'unsaved') this.setState({saveStatus: 'saving'});
    setTimeout(function() {
      this.setState({saveStatus: 'saved'});
    }.bind(this), 1000);
  }
});

module.exports = ProfilePopoverPattern;
