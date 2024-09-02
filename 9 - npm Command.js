// npm - global command, comes with node
// npm --version

// local dependency - use it only in this perticular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>

// package.json - manifest file (stores important info about project/package)
// There are three ways to create a package file :-
// 1. manual approach (create package.json in the root, create properties, etc)
// 2. npm init (step by step, press enter to skip)
// 3. npm init -y (eevrything default )

const _ = require('lodash');
const items = [1,[2,[3,[4,[5]]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
