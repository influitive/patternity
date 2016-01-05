import test from 'tape-catch';
import React from 'react';

import shallow from '../../testUtils/shallow';
import checkbox from './index.js';

test('Default modal container renders properly', t => {

  const { instance, result } = shallow(<checkbox />);

  t.equal(result.type, 'span', 'should be a span');

  t.end();
});
