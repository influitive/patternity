---
included: true
group: Components
---
```
let data = [{
  id: 4,
  name: 'List Item #4'
},
{
id: 99,
  name: 'List Item #99'
}]

<Table
  rowCount={data.length}
  rowStyle={{}}
  headerStyle={{}}>
  <Column
    header={<Cell>id</Cell>}
    cell={function(rowIndex) {
      return (
        <Cell>
          {data[rowIndex].id}
        </Cell>
      );
    }}/>
  <Column
    header={<Cell>name</Cell>}
    cell={function(rowIndex) {
      return (
        <Cell>
          {data[rowIndex].name}
        </Cell>
      );
    }}/>
</Table>
```
