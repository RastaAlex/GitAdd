const git = require('isomorphic-git');
const fs = require('fs');
const http = require('isomorphic-git/http/node');
const dir = process.cwd();

async function main () {
    const add = await git.add({fs, dir, filepath: '.'});
    const newcommit  = await git.commit({
        fs,
        dir: './',
        author: {
            name: 'RastaAlex',
            email: 'Rastaalex86@gmail.com'
        },
        ref: 'master',
        message: 'Added new changes to file'
      })
      console.log(newcommit);
 
     const push = await git.push({
        fs,
        http,
        dir: './',
        url: 'https://github.com/RastaAlex/GitAdd',
        remote: 'origin',
        ref: 'master',
        onAuth: () => ({ username: process.env.GITHUB_TOKEN}),
        })
      
       console.log(push);  
      
}
main().catch(err => console.log(err.message));
