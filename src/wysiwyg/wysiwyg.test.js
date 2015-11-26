import test from 'tape-catch';
import React from 'react';

import shallow from '../../testUtils/shallow';
import Wysiwyg from './index.js';

test('Default modal container renders properly', t => {

  const { instance, result } = shallow(<Wysiwyg />);

  t.equal(result.type, 'div', 'should be a div');

  t.end();
});