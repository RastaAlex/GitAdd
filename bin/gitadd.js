'use strict';

const git = require('simple-git/promise');

async function main() {
    await git().add('./*');
    await git().commit('new commit');
    await git().push('origin', 'master');
}

main().catch((err) => console.log(err.message));