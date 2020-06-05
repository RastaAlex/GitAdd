const fs = require('fs');
const exec = require('child_process');



fs.watch('./', (event, filename) => {
    if (event === 'change' && filename === 'gitadd.js') {
        console.log(`some changes in ${filename}`);
        try{
        exec.execSync(`git add ${filename}`);
        exec.execSync('git commit -m "New commit"');
    }catch(err){
        console.log(err.message);
    }
    }
});


const a ='abcdffffff';