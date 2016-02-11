import test from 'tape-catch';
import React from 'react';
import shallow from '../../testUtils/shallow';

import Tag from './index.js';

global.document = {};

test('<Tag /> methods', t => {
  t.plan(3);
  const tag = 'TestTag';
  const onUnTagged = (arg) => {
    t.equal(arg, tag, 'Pass in TestTag');
    t.pass('calls onUnTagged');
  };

  let { instance, result } = shallow(
    <Tag tag={tag} unTag={onUnTagged} />
  );

  t.equal(result.type, 'li', 'should be a list element');

  instance._unTag();
});
