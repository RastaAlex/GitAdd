const fs = require('fs');
const exec = require('child_process');
const tryCatch = require('try-catch');

function main() {
    fs.watch('./', (event, filename) => {
    if (event === 'change' && filename === 'gitadd.js') {
        console.log(`some changes in ${filename}`);
        const add = exec.execSync(`git add ${filename}`);
        const commit = exec.execSync('git commit -m "New commit"');
    }
})
}

const [error, result] = tryCatch(main);
if (error)
    console.error(error.message);
 


const a ='abcdfffffff';

// async function main() {
//     await fs.watch('./', event, filename);
//     if (event === 'change' && filename === 'gitadd.js') {
//         console.log(`some changes in ${filename}`)};
//     await exec.execSync(`git add ${filename}`);
//     await exec.execSync('git commit -m "New commit"');

// }

// main().catch((err) => console.log(err.message));


