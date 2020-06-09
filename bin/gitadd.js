'use strict';

const fs = require('fs');
const exec = require('child_process');
const tryCatch = require('try-catch');

function main() {
    exec.execSync( 'git add gitadd.js');
    exec.execSync('git commit -m "New commit"');
    exec.execSync('git push origin master');
}

fs.watch('./', (event, filename) => {
    if (event === 'change' && filename === 'gitadd.js') {
        const error = tryCatch(main);
        
        if (error) {
            console.error(error.message);
        }
    }
});
