import test from 'tape-catch';
import React from 'react';

import shallow from '../../testUtils/shallow';
import DropdownWithCustom from './index.js';

global.document = {};


test('<DropdownWithCustom />', t => {

  let { instance, result } = shallow(<DropdownWithCustom value="chocolate" onChange={()=>{}}>
    <option value="chocolate">Chocolate</option>
    <option value="vanilla">Vanilla</option>
  </DropdownWithCustom>);

  t.equal(result.type.displayName, 'SelectDropdown', 'should be a select form control');
  t.equal(result.props.children.length, 3, 'should have three child elements');

  t.deepEqual(result.props.children.map(e => e.type), ['option', 'option', 'option'], 'should be option elements');
  t.equal(result.props.children[2].props.children, 'Enter a custom value...', 'last child should be the custom selector');

  // Replacing the field

  t.test('selecting the "custom" option', (st) => {
    let { instance, result } = shallow(<DropdownWithCustom value="__custom__"></DropdownWithCustom>);
    st.equal(result.type.displayName, 'TextInput', 'should replace select with a Patternity TextInput');
    st.equal(result.props.type, 'text', 'should be a text field');
    st.equal(result.props.placeholder, 'Enter a custom value', 'should have placeholder text');
    st.equal(result.props.clearable, true, 'should be clearable');
    st.equal(result.props.value, '', 'should be blank initially');
    st.end();
  });

  t.test('when the value matches the value of any of the child options', (st) => {
    let { instance, result } = shallow(<DropdownWithCustom value="candy cane">
      <option value="candy cane">Candy Cane</option>
    </DropdownWithCustom>);
    st.equal(result.type.displayName, 'SelectDropdown', 'should be a select element');
    st.equal(result.props.value, 'candy cane', 'should be the specified value');
    st.equal(result.props.children.length, 2, 'should have two child elements');
    st.end();
  });

  t.test('when the value does not match the value of any of the child options', (st) => {
    let { instance, result } = shallow(<DropdownWithCustom value="santa">
      <option value="candy cane">Candy Cane</option>
      <option value="rudolph">Reindeer friends</option>
      <option value="snowman">Frosty</option>
    </DropdownWithCustom>);
    st.equal(result.type.displayName, 'TextInput', 'should replace select with a Patternity TextInput');
    st.equal(result.props.value, 'santa', 'should be the specified value');
    st.end();
  });

  // TODO Shane will come back to fix this
  t.skip('switching back from the custom entry input to the dropdown', (st) => {
    let { instance, result } = shallow(<DropdownWithCustom value="jack frost">
      <option value="candy cane">Candy Cane</option>
    </DropdownWithCustom>);

    instance.props.onCleared();
    console.log(result);

    st.equal(result.type.displayName, 'SelectDropdown', 'should be a select element');
    st.equal(result.props.value, '', 'should reset the value');
    st.end();
  });

  t.test('should fire the onChange', (st) => {
    st.plan(1);
    const change = () => st.pass();
    let { instance } = shallow(<DropdownWithCustom onChange={change} />);
    instance.props.onChange();
    st.end();
  });

  t.test('spreading the props', (st) => {
    let { instance, result } = shallow(<DropdownWithCustom value="chocolate" placeholder="monkey" name="george">
      <option value="chocolate">Chocolate</option>
      <option value="vanilla">Vanilla</option>
    </DropdownWithCustom>);

    st.equal(result.props.placeholder, 'monkey', 'should override the default placeholder');
    st.equal(result.props.name, 'george', 'should set the "name" attribute if provided');

    st.end();
  });

  t.end();
});


