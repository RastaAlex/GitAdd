const git = require('isomorphic-git');
const fs = require('fs');
const dir = process.cwd();

async function main () {
    await git.add({fs, dir, filepath: 'git_add.js'});
    await git.commit({ fs, dir, message: 'New commit',author: {name: 'RastaAlex', email: 'Rastaalex86@gmail.com' }});
    await git.push({
        fs,
        http: 'https://github.com/RastaAlex/GitAdd',
        dir: '/tutorial',
        remote: 'origin',
        ref: 'master',
    });
    
}
main().catch(err => console.log(err.message));

11
