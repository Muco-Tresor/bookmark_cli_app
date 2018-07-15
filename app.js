// native modules
const fs = require('fs');

// third party modules
const yargs = require('yargs').argv._[0];

// own module
const bookmarks = require('./bookmarks.js');


switch(yargs) {
    case 'add':
        console.log('add');
        break;

    case 'read':
        console.log('read');
        break;

    case 'remove':
        console.log('remove');
        break;

    case 'list':
        console.log('list');
        break;

    case 'search':
        console.log('search');
        break;

    default:
        console.log('No Command Specified.');

}
