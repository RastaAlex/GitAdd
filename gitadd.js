const fs = require('fs');
const exec = require('child_process');
const tryCatch = require('try-catch');

fs.watch('./', (event, filename) => {
    if (event === 'change' && filename === 'gitadd.js') {
        console.log(`some changes in ${filename}`);
        try{
        exec.execSync(`git add ${filename}`);
        } catch(err) {
            console.log('some error');
        }
        try{
        exec.execSync('git commit -m "New commit"');
        } catch(err) {
            console.log('some errror');
        }
    }
});

const a ='abcdffffffgffggggg';