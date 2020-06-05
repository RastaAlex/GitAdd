const fs = require('fs');
const exec = require('child_process');



// fs.watch('./', (event, filename) => {
//     if (event === 'change' && filename === 'gitadd.js') {
//         console.log(`some changes in ${filename}`);
//         try{
//         exec.execSync(`git add ${filename}`);
//         exec.execSync('git commit -m "New commit"');
//     }catch(err){
//         console.log(err.message);
//     }
//     }
// });


const a ='abcdffffffffff';

async function main() {
    await fs.watch('./', event, filename);
    if (event === 'change' && filename === 'gitadd.js') {
        console.log(`some changes in ${filename}`)};
    await exec.execSync(`git add ${filename}`);
    await exec.execSync('git commit -m "New commit"');

}

main().catch((err) => console.log(err.message));


