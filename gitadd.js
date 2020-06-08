const fs = require('fs');
const exec = require('child_process');
const tryCatch = require('try-catch');

fs.watch('./', (event, filename) => {
    if (event === 'change' && filename === 'gitadd.js') {
        console.log(`some changes in ${filename}`);
        const[error, result] = tryCatch(exec.execSync,`git add ${filename}`);
        if(error)
            console.error(error.message);
       const[err, res] = tryCatch(exec.execSync,'git commit -m "New commit"');
         if(err)
            console.error(err.message);
      }
});

const abc = 'abc';