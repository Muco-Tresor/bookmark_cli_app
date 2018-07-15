// third party modules
const yargs = require('yargs').argv;

// own module
const bookmarks = require('./bookmarks.js');


switch (yargs._[0]) {
    case 'add':
        const bookmark = bookmarks.add(yargs);
        if(bookmark) {
            console.log(`The Bookmark added: ${bookmark.title}`);
            bookmarks.log(bookmark);
        } else {
            console.log("The bookmark you tried to add is already in our database.");
        }
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
