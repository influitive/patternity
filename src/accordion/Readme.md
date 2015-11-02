```
let _accordionSections=function(){
  return [{
    "header" : "Section Header One",
    "body" : "Section Body One",
    "key" : "test-2",
    "isEnabled" : true
  },{
    "header" : "Section Header Two",
    "body" : "Section Body Two",
    "key" : "test-3",
    "isEnabled" : false
  },{
    "header" : "Section Header Three",
    "body" : "Section Body Three",
    "key" : "test-1",
    "isEnabled" : true
  }];
};

<Accordion sections={_accordionSections()} uniqueIdentifier="accordion-1" onOpenSection={function(id){
    alert("Opened section "+id);
  }} />
```
