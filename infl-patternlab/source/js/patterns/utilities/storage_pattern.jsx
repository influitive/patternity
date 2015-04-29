var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');
var Code      = require('../../patternlab-components/code.jsx');
var Require   = require('../../patternlab-components/require.jsx');

var StoragePattern = React.createClass({
  render : function(){
    return (
      <div className="storage-pattern">
        <Pattern title="storage">
          <p>The Storage utility is a wrapper for accessing localStorage.  This will isolate the use of localStorage in the app and allow for easier mocking when writing tests.</p>

          <Pattern.Detail title="Storage.getItem">
            <p>getItem is used to retreive data from localStorage.  It has a couple additional features it will JSON.parse the value on retrieval and has a default value.  Default is what will be passed back if the item comes back from localStorage as null.</p>
            <Code>
              <Code.JS>
                var itemValue = Storage.getItem(key, defaultValue);
              </Code.JS>
            </Code>
          </Pattern.Detail>

          <Pattern.Detail title="Storage.setItem">
            <p>setItem is used to save data to localStorage.  It has an additional feature.  It will JSON.stringify the value when it is set.</p>
            <Code>
              <Code.JS>
                Storage.setItem(key, value);
              </Code.JS>
            </Code>
          </Pattern.Detail>

          <Pattern.Detail title="Storage.removeItem">
            <p>removeItem is used to remove data from localStorage.</p>
            <Code>
              <Code.JS>
                Storage.removeItem(key);
              </Code.JS>
            </Code>
          </Pattern.Detail>

          <Require>
            <Require.JS>
              var Storage = require("patternity/infl-components/utilities/storage.js");
            </Require.JS>
          </Require>
        </Pattern>
      </div>
    );
  }
});

module.exports = StoragePattern;
