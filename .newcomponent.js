'use strict';

import fs from 'fs';
import _ from 'lodash';
import path from 'path';
import isDir from 'is-dir';
import chalk from 'chalk';

const name = process.argv[2];
if (!name) {
  console.log(chalk.yellow('Usage: npm run newcomp <component-name>'));
  process.exit(0);
}

const classname = _.compose(_.capitalize, _.camelCase)(name);
const fsName = _.kebabCase(name);
const dest = path.join(__dirname, 'src', fsName);

const tests = `import test from 'tape-catch';
import React from 'react';

import shallow from '../../testUtils/shallow';
import ${classname} from './index.js';

test('Default modal container renders properly', t => {

  const { instance, result } = shallow(<${classname} />);

  t.equal(result.type, 'div', 'should be a div');

  t.end();
});`

const js = `import React, { Component } from 'react';

export default class ${classname} extends Component {
  render() {
    return <div></div>;
  }
}`;

// Readme Template
const readme = `---
include: true
group: Components
---
\`\`\`
<${classname}>
</${classname}>
\`\`\`
`;

if (isDir.sync(dest)) {
  console.error(chalk.red(`Component ${fsName} exists`));
  process.exit(0);
}

fs.mkdirSync(dest);
fs.writeFileSync(path.join(dest, 'index.js'), js);
fs.writeFileSync(path.join(dest, `${fsName}.test.js`), tests);
fs.writeFileSync(path.join(dest, `${fsName}.scss`), '// Will need to add this to infl-styles/all.scss and all.styleguide.scss');
fs.writeFileSync(path.join(dest, 'Readme.md'), readme);
console.log(chalk.green('Component Created'));

