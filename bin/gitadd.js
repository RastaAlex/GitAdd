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
        const [error] = tryCatch(main);
        
        if (error) {
            console.error(error.message);
        }
    }
});

// $ node gitadd.js
// To https://github.com/RastaAlex/GitAdd
//    b80ced9..b164509  master -> master
// undefined
// warning: LF will be replaced by CRLF in bin/gitadd.js.
// The file will have its original line endings in your working directory
// To https://github.com/RastaAlex/GitAdd
//    b164509..f4fd101  master -> master
// undefined
// undefined
// undefined
