const { readFile, writeFile } = require('fs');

console.log('Start the Task: --Read two file and write in new File--');

readFile('./FileSystemFolder/text1.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    else {
        const text1 = result;
        readFile('./FileSystemFolder/text2.txt', 'utf-8', (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            else {
                const text2 = result;
                writeFile('./FileSystemFolder/newTextAsync.txt',
                    `This is the new result: ${text1} and ${text2}`, (err, result) => {
                        if (err) {
                            console.log(err);
                            return;
                        }
                        else {
                            console.log(result);
                            console.log('Done the Task: --Read two file and write in new File--');
                        }
                    })
            }
        })
    }
})

readFile('./FileSystemFolder/newTextAsync.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    else {
        console.log(result);
    }
})
console.log('Start the new Task');