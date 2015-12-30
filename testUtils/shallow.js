import sd from 'skin-deep';

export default function(comp) {
  const tree = sd.shallowRender(comp);

  return {
    instance: tree.getMountedInstance(),
    result:   tree.getRenderOutput()
  };
}
