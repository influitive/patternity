import test from 'tape-catch';
import React from 'react';

import shallow from '../../testUtils/shallow';
import DatePicker from './index.js';

test('Default modal container renders properly', t => {

  const { result } = shallow(<DatePicker />);

  t.equal(result.type, 'div', 'should be a div');

  t.end();
});
