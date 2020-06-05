const fs = require('fs');
const exec = require('child_process');
const tryCatch = require('try-catch');

    fs.watch('./', (event, filename) => {
    if (event === 'change' && filename === 'gitadd.js') {
        console.log(`some changes in ${filename}`);
        const [error, result] = tryCatch(exec.execSync(`git add ${filename}`));
        if (error)
        console.error(error.message);
        exec.execSync('git commit -m "New commit"');
        
    }
});





 
 


const a ='abcdffffffffff';

// async function main() {
//     await fs.watch('./', event, filename);
//     if (event === 'change' && filename === 'gitadd.js') {
//         console.log(`some changes in ${filename}`)};
//     await exec.execSync(`git add ${filename}`);
//     await exec.execSync('git commit -m "New commit"');

// }

// main().catch((err) => console.log(err.message));


