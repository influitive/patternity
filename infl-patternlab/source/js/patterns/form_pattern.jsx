var React = require('react');
var Pattern = require('../patternlab-components/pattern.jsx');
var Code = require('../patternlab-components/code.jsx');
var Form = require("../../../infl-components/form.jsx");
var InputLabel = require("../../../infl-components/input_label.jsx");
var TextInput = require("../../../infl-components/text_input.jsx");

var FormPattern = React.createClass({
  render : function(){
    return (
      <div className="form-pattern">
        <Pattern title="form">
          <p>The form component is used for wrapping form sub components and aids in the styling and layout for forms.</p>
          <Pattern.Detail title="Form">
            <p>Form renders a form tag.  So there is not much to show... sorry</p>

            <Code>
              <Code.JSX>
                &lt;Form&gt;
                &lt;/Form&gt;
              </Code.JSX>
              <Code.WithoutJSX patternName="Form" />
              <Code.Props patternProps={this._buildFormProps()} />
            </Code>
          </Pattern.Detail>
          <Pattern.Detail title="Form - Rows">
            <p>Should be used with Form.  Otherwise there will be no styling</p>
            <Pattern.Show>
              <Form>
                <Form.Row>
                  <InputLabel label="Text Input">
                    <TextInput name="text-input" placeholder="Text Input" />
                  </InputLabel>
                </Form.Row>
              </Form>
            </Pattern.Show>
            <Code>
              <Code.JSX>
                &lt;Form&gt;
                  &lt;Form.Row inputSize="large"&gt;
                    &lt;InputLabel label="Text Input" &gt;
                      &lt;TextInput name="text-input" placeholder="Text Input" /&gt;
                    &lt;/InputLabel&gt;
                  &lt;/Form.Row&gt;
                &lt;/Form&gt;
              </Code.JSX>
              <Code.WithoutJSX patternName="Form.Row" />
              <Code.Props patternProps={this._buildFormRowProps()} />
            </Code>
          </Pattern.Detail>
        </Pattern>
      </div>
    );
  },
  _buildFormProps : function(){
    return {
      acceptCharset : {
        type : "string",
        description : "character encodings that are to be used for the form submission"
      },
      action : {
        type : "string",
        description : "url"
      },
      autocomplete : {
        type : "string",
        description : "one of 'on', 'off' defaults to empty string"
      },
      enctype : {
        type : "string",
        description : "one of 'application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain'. defaults to empty string"
      },
      method : {
        type : "string",
        description : "one of 'get', 'post'.  defaults to empty string"
      },
      name : {
        type : "string",
        description : "name of the form"
      },
      novalidate : {
        type : "boolean",
        description : "determines if html 5 validation is on.  defaults to false"
      },
      target : {
        type : "string",
        description : "one of '_blank', '_self', '_parent', '_top'.  defaults to empty string"
      }
    };
  },
  _buildFormRowProps : function(){
    return {
      children : {
        type : "[...]",
        description : "array or TextInput, SelectDropdown, Checkbox, RadioButton, etc."
      },
      inputSize : {
        type : "string",
        description : "determines how large the input will be small, medium ro large.  defaults to large"
      }
    };
  }
});

module.exports = FormPattern;

/* old doc to be used as reference

<script type="text/javascript">
  function buildTextInput(){
    return inflComp.React.createElement(inflComp.TextInput,{
      name : "text-input",
      placeholder : "Text Input"
    });
  }

  function buildFormLabel(){
    return inflComp.React.createElement(inflComp.InputLabel,{
      label : "Input Label",
      children : buildTextInput()
    });
  }

  function buildFormLabelMultiInput(){
    return inflComp.React.createElement(inflComp.InputLabel,{
      label : "Input Label",
      children : [buildTextInput(), buildTextInput(), buildTextInput()]
    });
  }

  function buildFormRowMultiInput(){
    return inflComp.React.createElement(inflComp.Form.Row,{
      children : buildFormLabelMultiInput()
    });
  }

  function buildFormRow(){
    return inflComp.React.createElement(inflComp.Form.Row,{
      size : "small",
      children : buildFormLabel()
    });
  }

  function buildFormColumn(){
    return inflComp.React.createElement(inflComp.Form.Column,{
      children : [buildFormRow(), buildFormRow(), buildFormRow()]
    });
  }

  function buildFormActions(){
    return inflComp.React.createElement(inflComp.Form.Actions,{
      children : [
        inflComp.React.createElement(inflComp.ButtonGroup, {
          children : [
            inflComp.React.createElement("button", {
              className : "text",
              children: ["Cancel"]
            }),
            inflComp.React.createElement("button", {
              className : "success",
              children: ["Save"]
            })
          ]
        })
      ]
    });
  }
</script>

<section class="pattern-section">
  <header>
    <h3>form</h3>
  </header>

  <p>The form component is used for wrapping form sub components and aids in the styling and layout for forms.</p>

  <h4>Form</h4>

  <p>Form renders a form tag.  So there isn't much to show... sorry</p>

  <h4 class="code-title">Code</h4>

  <h5 class="code-title">JSX</h5>
  <pre class="code">
    <code>
      &lt;Form&gt;
      &lt;/Form&gt;
    </code>
  </pre>

  <h5 class="code-title">Without JSX</h5>
  <pre class="code">
    <code>
      React.render(
        React.createElement(Form, props),
        {DOM element to append form to}
      );
    </code>
  </pre>

  <h4 class="code-title">Props</h4>

  <pre class="code">
    <code>
      {
        acceptCharset : string,    // character encodings that are to be used for the form submission
        action : string,           // url
        autocomplete : string,     // one of 'on', 'off' defaults to empty string
        enctype : string,          // one of 'application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain'. defaults to empty string
        method : string            // one of 'get', 'post'.  defaults to empty string
        name : string,             // name of th form
        novalidate : boolean,      // determines if html 5 validation is on.  defaults to false
        target : string            // one of '_blank', '_self', '_parent', '_top'.  defaults to empty string
      }
    </code>
  </pre>

  <h4>Form - Rows</h4>

  <p>Should be used with Form.  Otherwise there will be no styling</p>

  <div id="form-rows-pattern"></div>
  <script type="text/javascript">
    (function() {
      var props = {
        children : [buildFormRow(), buildFormRow(), buildFormRow(), buildFormRow()]
      };

      inflComp.React.render(
        inflComp.React.createElement(inflComp.Form, props),
        document.getElementById("form-rows-pattern")
      );
    })();
  </script>

  <h4 class="code-title">Code</h4>

  <h5 class="code-title">JSX</h5>
  <pre class="code">
    <code>
      &lt;Form&gt;
        &lt;Form.Row inputSize="large"&gt;
          &lt;InputLabel label="Text Input" &gt;
            &lt;TextInput name="text-input" placeholder="Text Input" /&gt;
          &lt;/InputLabel&gt;
        &lt;/Form.Row&gt;
        .
        .
        .
      &lt;/Form&gt;
    </code>
  </pre>

  <h5 class="code-title">Without JSX</h5>
  <pre class="code">
    <code>
      React.render(
        React.createElement(Form.Row, props),
        {DOM element to append form row to}
      );
    </code>
  </pre>

  <h4 class="code-title">Props</h4>

  <pre class="code">
    <code>
      {
        children : [...]    //form row is best used with input label,
        inputSize : string  //determines how large the input will be small, medium ro large.  defaults to large
      }
    </code>
  </pre>

  <h4>Form - Columns - 2 Columns</h4>

  <p>Should be used with Form.  Otherwise there will be no styling.  Form can handle none, 2 and 3 columns</p>

  <div id="form-column-pattern"></div>
  <script type="text/javascript">
    (function() {
      var props = {
        children : [buildFormColumn(), buildFormColumn()]
      };

      inflComp.React.render(
        inflComp.React.createElement(inflComp.Form, props),
        document.getElementById("form-column-pattern")
      );
    })();
  </script>

  <h4 class="code-title">Code</h4>

  <h5 class="code-title">JSX</h5>
  <pre class="code">
    <code>
      &lt;Form&gt;
        &lt;Form.Column&gt;
          &lt;Form.Row&gt;
            &lt;InputLabel label="Text Input" &gt;
              &lt;TextInput name="text-input" placeholder="Text Input" /&gt;
            &lt;/InputLabel&gt;
          &lt;/Form.Row&gt;
          .
          .
          .
        &lt;/Form.Column&gt;
        &lt;Form.Column&gt;
          &lt;Form.Row&gt;
            &lt;InputLabel label="Text Input" &gt;
              &lt;TextInput name="text-input" placeholder="Text Input" /&gt;
            &lt;/InputLabel&gt;
          &lt;/Form.Row&gt;
          .
          .
          .
        &lt;/Form.Column&gt;
      &lt;/Form&gt;
    </code>
  </pre>

  <h5 class="code-title">Without JSX</h5>
  <pre class="code">
    <code>
      React.render(
        React.createElement(Form.Column, props),
        {DOM element to append form column to}
      );
    </code>
  </pre>

  <h4 class="code-title">Props</h4>

  <pre class="code">
    <code>
      {
        children : [...]  //form row is best used with Form
      }
    </code>
  </pre>

  <h4>Form - Columns - 3 Columns</h4>

  <div id="form-column-3-pattern"></div>
  <script type="text/javascript">
    (function() {
      var props = {
        children : [buildFormColumn(), buildFormColumn(), buildFormColumn(), buildFormRow(), buildFormColumn(), buildFormColumn(), buildFormRowMultiInput(), buildFormActions()]
      };

      inflComp.React.render(
        inflComp.React.createElement(inflComp.Form, props),
        document.getElementById("form-column-3-pattern")
      );
    })();
  </script>

  <h4 class="code-title">Code</h4>

  <h5 class="code-title">JSX</h5>
  <pre class="code">
    <code>
      &lt;Form&gt;
        &lt;Form.Column&gt;
          &lt;Form.Row&gt;
            &lt;InputLabel label="Text Input" &gt;
              &lt;TextInput name="text-input" placeholder="Text Input" /&gt;
            &lt;/InputLabel&gt;
          &lt;/Form.Row&gt;
          &lt;Form.Row&gt;
            &lt;InputLabel label="Text Input" &gt;
              &lt;TextInput name="text-input" placeholder="Text Input" /&gt;
            &lt;/InputLabel&gt;
          &lt;/Form.Row&gt;
          &lt;Form.Row&gt;
            &lt;InputLabel label="Text Input" &gt;
              &lt;TextInput name="text-input" placeholder="Text Input" /&gt;
            &lt;/InputLabel&gt;
          &lt;/Form.Row&gt;
        &lt;/Form.Column&gt;
        &lt;Form.Row&gt;
          &lt;InputLabel label="Text Input" &gt;
            &lt;TextInput name="text-input" placeholder="Text Input" /&gt;
          &lt;/InputLabel&gt;
        &lt;/Form.Row&gt;
        &lt;Form.Column&gt;
          &lt;Form.Row&gt;
            &lt;InputLabel label="Text Input" &gt;
              &lt;TextInput name="text-input" placeholder="Text Input" /&gt;
            &lt;/InputLabel&gt;
          &lt;/Form.Row&gt;
          &lt;Form.Row&gt;
            &lt;InputLabel label="Text Input" &gt;
              &lt;TextInput name="text-input" placeholder="Text Input" /&gt;
            &lt;/InputLabel&gt;
          &lt;/Form.Row&gt;
        &lt;/Form.Column&gt;
        &lt;Form.Row&gt;
          &lt;InputLabel label="Text Input" &gt;
            &lt;TextInput name="text-input" placeholder="Text Input" /&gt;
            &lt;TextInput name="text-input" placeholder="Text Input" /&gt;
            &lt;TextInput name="text-input" placeholder="Text Input" /&gt;
          &lt;/InputLabel&gt;
        &lt;/Form.Row&gt;
        &lt;Form.Actions&gt;
          &lt;ButtonGroup&gt;
            &lt;Button type="text"&gt;Cancel&lt;/Button&gt;
            &lt;Button type="success"&gt;Save&lt;/Button&gt;
          &lt;/ButtonGroup&gt;
        &lt;/Form.Actions&gt;
      &lt;/Form&gt;
    </code>
  </pre>

  <h5 class="code-title">Without JSX</h5>
  <pre class="code">
    <code>
      React.render(
        React.createElement(Form.Column, props),
        {DOM element to append form column to}
      );
    </code>
  </pre>

  <h4 class="code-title">Props</h4>

  <pre class="code">
    <code>
      {
        children : [...]  //form column is best used with form
      }
    </code>
  </pre>

  <h4>Form - Actions</h4>

  <div id="form-actions-pattern"></div>
  <script type="text/javascript">
    (function() {
      var props = {
        children : [buildFormActions()]
      };

      inflComp.React.render(
        inflComp.React.createElement(inflComp.Form, props),
        document.getElementById("form-actions-pattern")
      );
    })();
  </script>

  <h4 class="code-title">Code</h4>

  <h5 class="code-title">JSX</h5>
  <pre class="code">
    <code>
      &lt;Form&gt;
        &lt;Form.Actions&gt;
          &lt;ButtonGroup&gt;
            &lt;Button type="text"&gt;Cancel&lt;/Button&gt;
            &lt;Button type="success"&gt;Save&lt;/Button&gt;
          &lt;/ButtonGroup&gt;
        &lt;/Form.Actions&gt;
      &lt;/Form&gt;
    </code>
  </pre>

  <h5 class="code-title">Without JSX</h5>
  <pre class="code">
    <code>
      React.render(
        React.createElement(Form.Actions, props),
        {DOM element to append form actions to}
      );
    </code>
  </pre>

  <h4 class="code-title">Props</h4>

  <pre class="code">
    <code>
      {
        children : [...]  // will handle and style button and .button
      }
    </code>
  </pre>
</section>
*/
