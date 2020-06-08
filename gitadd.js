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
       const [er, rs] = tryCatch(exec.execSync, 'git push origin master');
         if(er)
            console.error(er.message);     
      }

});

const abc = 'abc';

// $ node gitadd.js
// some changes in gitadd.js
// To https://github.com/RastaAlex/GitAdd
//    24b331c..433afc5  master -> master
// some changes in gitadd.js
// To https://github.com/RastaAlex/GitAdd
//    433afc5..51ec8c1  master -> master
// some changes in gitadd.js
// Command failed: git commit -m "New commit"
// Everything up-to-date
// some changes in gitadd.js
// Command failed: git commit -m "New commit"
// Everything up-to-date