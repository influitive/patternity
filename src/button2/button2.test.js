import test from 'tape-catch';
import React from 'react';

import shallow from '../../testUtils/shallow';
import { Button } from './index.js';

test('button2', (t) => {
  const click = () => true;
  let { result } = shallow(<Button disabled={true} onClick={click}>Hello</Button>);

  t.equal(result.type, 'button', 'should be a button');

  t.ok(result.props.disabled, 'should be disabled');
  t.ok(result.props.className.includes('disabled'), 'should have class "disabled"');

  t.equal(result.props.onClick, click, 'should attach click to button');
  t.test('button2: should fire the click', (st) => {
    st.plan(1);
    const click = () => st.pass();
    let { instance } = shallow(<Button disabled={true} onClick={click}>Hello</Button>);
    instance.props.onClick();
  });

  t.equal(result.props.children, 'Hello', 'should render text child');

  ({ result } = shallow(<Button onClick={() => ''}><span>Hello</span><div>Goodbye</div></Button>));
  t.equal(result.props.children.length, 2, 'should render two children');

  const expectedChildren = [
    <span>Hello</span>,
    <div>Goodbye</div>
  ];
  t.deepEqual(result.props.children, expectedChildren, 'should render children');

  t.end();
});
