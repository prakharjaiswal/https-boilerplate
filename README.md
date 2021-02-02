# Basic seed for developing UI code locally using SSL

## Basic setup after cloning
- npm install

## Basic npm scripts
- npm build to build the UI output file
- npm serve to start express server

## Directory structure
- Frontend code resides in ui directory
- Backend is based on express js and lies under server directory
- Dev environment related scripts and configs lie in dev directory

## Todo Items
- SSL
    - Add support to generate and add server.cert file into keychain for other OS (currently only supports macOS)
    - provide way to re-use an exisiting certificate
    - provide way to support aliases host against localhost
- Webpack
    - Add support for watch mode