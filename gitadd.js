const fs = require('fs');
const exec = require('child_process');

fs.watch('./', (event, filename) => {
    if (event === 'change' && filename === 'gitadd.js') {
        console.log(`some changes in ${filename}`);
        exec.execSync(`git add ${filename}`);
        exec.execSync('git commit -m "New commit"');
    }
});

const a ='abcdfg';