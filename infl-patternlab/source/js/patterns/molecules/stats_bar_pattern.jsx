var React     = require('react');
var Pattern   = require('../../patternlab-components/pattern.jsx');
var Code      = require('../../patternlab-components/code.jsx');
var Require   = require('../../patternlab-components/require.jsx');

var Form            = require("../../../../infl-components/form.jsx");
var InputLabel      = require("../../../../infl-components/input_label.jsx");
var RadioButton     = require("../../../../infl-components/radio_button.jsx");

var StatsBar = require("../../../../infl-components/stats_bar.jsx");

var StatsBarPattern = React.createClass({
  getInitialState : function(){
    return {
      statType : "points"
    };
  },
  render : function(){
    return (
      <div className="stats-bar-pattern">
        <Pattern title="stats bar">
          <p>The Stats Bar is used to display a set of information to the user.  This could be points balances, roll up of activity, etc.</p>

          <Pattern.Detail title="Stats Bar">
            <Pattern.Show>
              <StatsBar statType="points">
                <StatsBar.Stat title="Points Required" value={1500} />
                <StatsBar.Stat title="Your Total" value={3500} />
                <StatsBar.Stat title="Balance" value={-2000} />
              </StatsBar>
            </Pattern.Show>

            <Pattern.Demo title="Stats Bar Demo">
              <div className="demo-output">
                <div className="demo-pattern">
                  <h4>Stats Bar</h4>
                  <div className="demo-pattern-example">
                      <StatsBar statType={this.state.statType}>
                        <StatsBar.Stat title="Points Required" value={1500} />
                        <StatsBar.Stat title="Your Total" value={3500} />
                        <StatsBar.Stat title="Balance" value={-2000} />
                      </StatsBar>
                  </div>
                </div>
                <Code>
                  <Code.JSX>
                    {this._buildDemoJSX()}
                  </Code.JSX>
                </Code>
                <h5>Props</h5>
                <div className="demo-props">
                  <pre>
                    <code>
                      {this._buildDemoProps()}
                    </code>
                  </pre>
                </div>
              </div>
              <StatBarControls statType={this.state.statType} onChange={this._handleChange} />
            </Pattern.Demo>

            <Code>
              <Code.JSX>
                &lt;StatsBar statType="points"&gt;
                  &lt;StatsBar.Stat title="Points Required" value=&#123;1500&#125; &gt;&lt;/StatsBar.Stat&gt;
                  &lt;StatsBar.Stat title="Your Total" value=&#123;3500&#125; &gt;&lt;/StatsBar.Stat&gt;
                  &lt;StatsBar.Stat title="Balance" value=&#123;-2000&#125; &gt;&lt;/StatsBar.Stat&gt;
                &lt;/StatsBar&gt;
              </Code.JSX>
              <Code.WithoutJSX patternName="StatsBar" />
              <Code.Props patternProps={this._buildStatsBarProps()} />
            </Code>
          </Pattern.Detail>

          <Pattern.Detail title="Stats Bar - Stat">
            <Code>
              <Code.JSX>
                &lt;StatsBar.Stat title="Points Required" value=&#123;1500&#125; &gt;&lt;/StatsBar.Stat&gt;
              </Code.JSX>
              <Code.WithoutJSX patternName="StatsBar.Stat" />
              <Code.Props patternProps={this._buildStatsBarStatProps()} />
            </Code>
          </Pattern.Detail>

          <Require>
            <Require.JS>
              var StatsBar = require("patternity/infl-components/stats_bar.jsx");
            </Require.JS>
            <Require.CSS>
              @import "patternity/infl-styles/stats_bar";
            </Require.CSS>
          </Require>
        </Pattern>
      </div>
    );
  },
  _handleChange : function(name, value){
    var currentState = this.state;
    currentState[name] = value;
    this.setState(currentState);
  },
  _buildDemoJSX : function(){
    return (
      '<StatsBar statType={' + this.state.statType + '}>\n' +
        '\t<StatsBar.Stat title="Points Required" value={1500} />\n' +
        '\t<StatsBar.Stat title="Your Total" value={3500} />\n' +
        '\t<StatsBar.Stat title="Balance" value={-2000} />\n' +
      '</StatsBar>'
    );
  },
  _buildDemoProps : function(){
    return (
      '{\n' +
        '\statType: "' + this.state.statType + '"\n' +
      '}'
    );
  },
  _buildStatsBarProps : function(){
    return {
      statType : {
        type : "string",
        defaultValue : "points",
        required : false,
        description : "Type of stats can be points or activity"
      }
    };
  },
  _buildStatsBarStatProps : function(){
    return {
      title : {
        type : "string",
        defaultValue : "",
        required : true,
        description : "Title of the stat"
      },
      value : {
        type : "string or number",
        defaultValue : "",
        required : true,
        description : "Value of the stat"
      }
    };
  }
});

var StatBarControls = React.createClass({
  getDefaultProps : function(){
    return {
      statType : "points",
      onChange : function(){}
    }
  },
  PropTypes : {
    statType : React.PropTypes.oneOf([
      'points',
      'activity'
    ]),
    onChange : React.PropTypes.func
  },
  render: function() {
    return (
      <div className="pattern-controls">
        <h4>Alert Controls</h4>
        <Form>
          <Form.Row>
            <InputLabel label="Stat Type">
              <RadioButton.Group layout="stacked">
                <RadioButton isChecked={this.props.statType === "points"} onChange={this._handleChange} radioName="statType" radioLabel="Points" value="points"></RadioButton>
                <RadioButton isChecked={this.props.statType === "activity"} onChange={this._handleChange} radioName="statType" radioLabel="Activity" value="activity"></RadioButton>
              </RadioButton.Group>
            </InputLabel>
          </Form.Row>
        </Form>
      </div>
    );
  },
  _handleChange : function(event){
    this.props.onChange(event.target.name, event.target.value);
  }
});

module.exports = StatsBarPattern;
