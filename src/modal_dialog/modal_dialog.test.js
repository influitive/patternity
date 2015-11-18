import test from 'tape-catch';
import React from 'react';

import shallow from '../../testUtils/shallow';
import Modal from './index.js';

test('Default modal container renders properly', t => {

  const { instance, result } = shallow(<Modal><span>Hi</span></Modal>);
  const expectedChildren = ['<span>Hi</span>'];

  t.equal(result.type, 'div', 'should be a div');
  t.deepEqual(result.props.children, expectedChildren, 'should render a child')

  t.end();
});
