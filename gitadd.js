'use strict';

const fs = require('fs');
const exec = require('child_process');
const tryCatch = require('try-catch');

fs.watch('./', (event, filename) => {
    if (event === 'change' && filename === 'gitadd.js') {
        tryCatch(exec.execSync, `git add ${filename}`);
        tryCatch(exec.execSync, 'git commit -m "New commit"');
        tryCatch(exec.execSync, 'git push origin master');
    }
});

a