import test from 'tape-catch';
import React from 'react';
import shallow from '../../testUtils/shallow';

import Tagger from './index.js';
import Tag from './tag.js';

global.document = {};

test('<Tagger /> methods', t => {
  t.plan(2);

  const onTagged = (arr) => {
    t.equal(arr.length, 3, 'should find 3 tags');
  };

  let { instance, result } = shallow(
    <Tagger
      onTagged={onTagged}
      onUnTagged={() => {}} />
  );

  // Test the component
  t.equal(result.type, 'div', 'should be a div');

  // Invoke methods that are passed in
  const e = { target: { value: 'string,hello, bob'}};
  instance._handleChange(e);

});

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
