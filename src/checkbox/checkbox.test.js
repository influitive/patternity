import test from 'tape-catch';
import React from 'react';

import { shallow } from 'enzyme';
import Checkbox from './index.js';
import sinon from 'sinon';

test('<Checkbox />', t => {

  // This isn't used but leaving it here in case it's useful
  const changeEv = sinon.spy();
  const wrapper = shallow(<Checkbox label='ABC123' onChange={changeEv}/>);

  t.equal(wrapper.type(), 'span', 'should be a span');
  t.equal(wrapper.find('.pt-checkbox-label').text(), 'ABC123', 'should match');
  t.ok(wrapper.filter('span.pt-checkbox'), 'Checkbox exists');

  // Invoke change handler
  t.notOk(wrapper.state().isChecked, 'Pre-change, not checked');

  // The following test is broken because enyzme
  // seems to have a problem with it
  wrapper._handleChange({});
  t.ok(wrapper.state().isChecked, 'Post-change, is checked')

  t.end();
});
