const fs = require('fs');
const exec = require('child_process');
const tryCatch = require('try-catch');
const add = require('debug')('a');
const commit = require('debug')('b');
fs.watch('./', (event, filename) => {
        try{
        if (event === 'change' && filename === 'gitadd.js') {
        console.log(`some changes in ${filename}`);
        const a = exec.execSync(`git add ${filename}`);
        const b = exec.execSync('git commit -m "New commit"');
        }
        } catch(err) {
            console.log(err.message);
        }
        // try{
        
        // } catch(err) {
        //     console.log(err.message);
        // }
    
});

const a ='abcdffffffgfff';