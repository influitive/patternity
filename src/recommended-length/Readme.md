---
included: true
group: Components
---
```
var func = (e) => {
  this.setState({value: e.target.value});
};

<RecommendedLength recommendedLength={40}>
  <TextInput value={this.state.value || "this is awesome"} onChange={func} name="headline" />
</RecommendedLength>
```
