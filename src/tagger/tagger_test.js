import test from 'tape-catch';
import React from 'react';

import shallow from '../../testUtils/shallow';
import tagger from './index.js';

test('Default modal container renders properly', t => {

  const { instance, result } = shallow(<tagger />);

  t.equal(result.type, 'div', 'should be a div');

  t.end();
});