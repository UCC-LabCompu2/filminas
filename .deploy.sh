#!/bin/bash
npm install

set -e # Exit with nonzero exit code if anything fails

# Now let's go have some fun with the cloned repo
git config user.name "Travis CI"
git config user.email "$(git --no-pager show -s --format='%ae' HEAD)"

# Get the deploy key by using Travis's stored variables to decrypt deploy_key.enc
openssl aes-256-cbc -K $encrypted_8b5ed4773e26_key -iv $encrypted_8b5ed4773e26_iv -in deploy_key.enc -out deploy_key -d
chmod 600 deploy_key
eval `ssh-agent -s`
ssh-add deploy_key

node ./node_modules/gulp/bin/gulp.js deploy
