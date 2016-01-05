import test from 'tape-catch';
import React from 'react';

import shallow from '../../testUtils/shallow';
import Checkbox from './index.js';

test('Checkbox: Default modal container renders properly', (t) => {

  let { result } = shallow(<Checkbox />);

  t.equal(result.type, 'span', 'should be a span');

  t.end();
});
