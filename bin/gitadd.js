'use strict';

const fs = require('fs');
const git = require('simple-git/promise');

async function main() {
    await git().add('./*');
    await git().commit('new commit');
    await git().push('origin', 'master');
}

fs.watch('./', (event) => {
    if (event === 'change') {
        main().catch((err) => console.log(err.message));
    }
});
