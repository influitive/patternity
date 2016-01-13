import test from 'tape-catch';
import React from 'react';

import shallow from '../../testUtils/shallow';
import ColorPicker from './index.js';

test('Default modal container renders properly', t => {

  const { result } = shallow(<ColorPicker />);

  t.equal(result.type, 'span', 'should be a span');

  t.end();
});
