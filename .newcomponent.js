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

const js = `import React, { Component, PropTypes } from 'react';

// Component File Template
export default class ${classname} extends Component {
  state = {

  };

  static propTypes = {

  };

  static defaultProps = {

  };

  render() {

  };
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
fs.writeFileSync(path.join(dest, `${fsName}.scss`), '// Will need to add this to infl-styles/all.scss and all.styleguide.scss');
fs.writeFileSync(path.join(dest, 'Readme.md'), readme);
console.log(chalk.green('Component Created'));

