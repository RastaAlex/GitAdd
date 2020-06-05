const fs = require('fs');
const exec = require('child_process');
const tryCatch = require('try-catch');
const {parse} = JSON;

    fs.watch('./', (event, filename) => {
    if (event === 'change' && filename === 'gitadd.js') {
        console.log(`some changes in ${filename}`);
        exec.execSync(`git add ${filename}`);
        exec.execSync('git commit -m "New commit"');
        const {parse} = JSON;
        const [error, result] = tryCatch(parse, 'git commit -m "New commit"');
 
        if (error)
            console.error(error.message);
    }
});

const a ='abcdffffff';

// async function main() {
//     await fs.watch('./', event, filename);
//     if (event === 'change' && filename === 'gitadd.js') {
//         console.log(`some changes in ${filename}`)};
//     await exec.execSync(`git add ${filename}`);
//     await exec.execSync('git commit -m "New commit"');

// }

// main().catch((err) => console.log(err.message));


