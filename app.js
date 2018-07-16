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
        const get_bookmark = bookmarks.find(yargs);
        if(get_bookmark) {
            console.log('bookmark read');
            bookmarks.log(get_bookmark);
        } else {
            console.log('No bookmark found.');
        }
        break;

    case 'remove':
        const removed_bookmark = bookmarks.remove(yargs);
        if(removed_bookmark) {
            console.log(`bookmark removed: ${removed_bookmark}`);
        } else {
            console.log('No bookmark removed');
        }
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
