import test from 'tape-catch';
import React from 'react';

import shallow from '../../testUtils/shallow';
import Wysiwyg from './index.js';

test.skip('Default modal container renders properly', t => {

  const { result } = shallow(<Wysiwyg />);

  t.equal(result.type, 'element', 'should be an element');

  t.end();
});
