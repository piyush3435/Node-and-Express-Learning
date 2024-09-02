const { readFileSync, writeFileSync } = require('fs')

console.log('Start the Task: --Read two file and write in new File--');


first = readFileSync('./FileSystemFolder/text1.txt', 'utf8');
second = readFileSync('./FileSystemFolder/text2.txt', 'utf8');

console.log(first, second);

writeFileSync(
    './FileSystemFolder/newText.txt', 
    `This is the result: ${first} , ${second}`
);
writeFileSync(
    './FileSystemFolder/newTextWithAppend.txt', 
    `This is the result: ${first} , ${second}`,
    {flag : 'a'}
);

console.log('Done the Task: --Read two file and write in new File--');

console.log('Start the new Task');