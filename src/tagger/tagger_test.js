import test from 'tape-catch';
import React from 'react';
import sd from 'skin-deep'

import Tagger from './index.js';
import Tag from './tag.js';

test('<Tagger /> methods', t => {

  const stateValues = ['test1@gmail.com', 'test2@influitive.com'];
  const onTagged = (e) => {
    t.pass('calls onTagged');
  };

  const onUnTagged = (e) => {
    t.pass('calls onUnTagged');
  };

  const tree
    = sd.shallowRender(<Tagger
      tags = { stateValues }
      onTagged = { onTagged }
      onUnTagged = { onUnTagged }
    />);

  // Test the component
  const vdom = tree.getRenderOutput();
  t.equal(vdom.type, 'div', 'should be a div');

  // Test props
  t.equal(instance.props.tags, stateValues, 'should match passed in state Array');

  // Invoke methods that are passed in
  const instance = tree.getMountedInstance();
  instance.props.onTagged();
  instance.props.onUnTagged();

  // Test methods that exist
  t.ok(instance._isValidEmail('rohan@influitive.com'), 'passes valid email');
  t.notOk(instance._isValidEmail('rohan@influitive'), 'fails invalid email');

  t.end();
});

test('<Tag /> methods', t => {
  const tag = 'TestTag';
  const onUnTagged = (arg) => {
    t.equal(arg, tag, 'Pass in TestTag');
    t.pass('calls onUnTagged');
  };

  const tree = sd.shallowRender(<Tag tag={tag} unTag={onUnTagged} />);
  const vdom = tree.getRenderOutput();
  t.equal(vdom.type, 'li', 'should be a list element');

  const instance = tree.getMountedInstance();
  instance._unTag();

  t.end();
});
