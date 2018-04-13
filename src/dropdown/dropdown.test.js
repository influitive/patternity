import test from 'tape-catch';
import React from 'react';

import shallow from '../../testUtils/shallow';
import { Dropdown } from './index.js';

test('<Dropdown />', t => {

  const { instance, result } = shallow(<Dropdown onChange={()=>{}}/>);
  const children = instance._renderChildren('a');

  t.equal(result.type, 'ul', 'should be an unordered list');
  t.equal(children.length, 1, 'should have one child');
  t.equal(children[0].type, 'li', 'should have a child li');
  t.equal(children[0].props.children, 'a', 'child should be a');
  t.equal(children[0].props.className, 'option', 'child should be a class of option');

  t.end();
});
