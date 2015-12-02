import test from 'tape-catch';
import React from 'react';

import shallow from '../../testUtils/shallow';
import CheckboxAll from './index.js';

test('<CheckboxAll />', t => {
  t.plan(4);

  const { instance, result } = shallow(<CheckboxAll onChange={clickFn}/>);
  t.equal(result.type, 'label', 'should be a label');

  instance.props.onChange();
  function clickFn() { t.pass('Calls onChange') }

  t.ok(instance._isChecked(1), 'should be checked');
  t.ok(instance._isIndeterminate(-1), 'should be indeterminate');
});
