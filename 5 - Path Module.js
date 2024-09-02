const path = require("path");

console.log(path.sep);

const myPath = path.join('folder1', 'folder2', 'folder3', 'folder4', 'file.txt');
console.log(myPath);

const base = path.basename(myPath);
console.log(base);

const dirName = path.dirname(myPath);
console.log(dirName);

const absolutePath1 = path.resolve(__dirname, 'folder1', 'folder2', 'folder3', 'folder4', 'file.txt');
console.log(absolutePath1);

const absolutePath2 = path.resolve(__dirname, myPath);
console.log(absolutePath2);


