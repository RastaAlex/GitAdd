const fs = require('fs');
const exec = require('child_process');
const tryCatch = require('try-catch');

fs.watch('./', (event, filename) => {
    const add = exec.execSync(`git add ${filename}`);
    const commit = exec.execSync('git commit -m "New commit"');
    if (event === 'change' && filename === 'gitadd.js') {
        console.log(`some changes in ${filename}`);
        
        //tryCatch(add);
        //tryCatch(commit);
    }
});

const a ='abcdffffffgffgg';