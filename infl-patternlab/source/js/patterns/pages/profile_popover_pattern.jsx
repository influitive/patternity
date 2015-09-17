var React = require('react');
var Popover = require('../../../../infl-components/popover.jsx');
var ProfilePopover = require('../../../../infl-components/profile-popover');
var ProfilePopoverContent = require('../../../../infl-components/profile-popover/profile-popover-content');

var ProfilePopoverPattern = React.createClass({
  render: function() {
    var user = {
      name:    'Person McPersonson',
      title:   'Dastardly Devil',
      company: 'Infuitive'
    };
    return <div style={{textAlign: 'center'}}>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <ProfilePopover user={user}></ProfilePopover>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <ProfilePopover user={user}></ProfilePopover>
    </div>;
  }
});

module.exports = ProfilePopoverPattern;
