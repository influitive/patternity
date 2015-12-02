import test from 'tape-catch';
import React from 'react';

import shallow from '../../testUtils/shallow';
import ButtonDropdown from './index.js';

// Container component
test.skip('<ButtonDropdown />', t => {

  const { instance, result } = shallow(<ButtonDropdown />);
  t.end();
});
