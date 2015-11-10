```
var func = (e) => {
  this.setState({value: e.target.value});
};

<RecommendedLengthInput recommendedLength={40} onChange={func} value={this.state.value || "this is awesome"} />
```
