const fs = require('fs');
const exec = require('child_process');
const tryCatch = require('try-catch');
const git = require('simple-git/promise');

const a ='abcdffffff';

 async function main() {
    git().add('./*');
    git().commit('new commit');
    git().push('origin', 'master');
     
         
 }

 main().catch((err) => console.log(err.message));


