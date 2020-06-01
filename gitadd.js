const fs = require('fs');
const exec = require('child_process');

fs.watch('./', (event, filename) => {
    if (event === 'change' && filename === 'gitadd.js') {
        console.log(`some changes in ${filename}`);
       const add = exec.execSync(`git add ${filename}`);
        const commit = exec.execSync('git commit -m "New commit"');
    }
});

const a ='abcdffffffgffg';