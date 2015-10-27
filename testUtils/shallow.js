import sd from 'skin-deep';
import React from 'react/addons';
const TestUtils = React.addons.TestUtils;

export default function(comp) {
  let result, instance;
  const tree = sd.shallowRender(comp);

  return {
    instance: tree.getMountedInstance(),
    result:   tree.getRenderOutput()
  };
}
