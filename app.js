const titleOptions = {
    describe: 'bookmark title',
    demand: true,
    alias: 't',
}

const urlOptions = {
    describe: 'bookmark url',
    demand: true,
    alias: 'u',
}

// third party modules
const yargs = require('yargs')
.command('add', 'add a bookmark', {
    title: titleOptions,
    url: urlOptions
})
.command('read', 'show a bookmark', {
    title: titleOptions,
})
.command('remove', 'remove a bookmark', {
    title: titleOptions,
    url: urlOptions,
})
.command('list', 'show all bookmarks')
.command('search', 'search a bookmark based on title', {
    title: titleOptions
}).help('h').argv;

// own module
const bookmarks = require('./bookmarks.js');


switch (yargs._[0]) {
    /**
     * add command
     */
    case 'add':
        const bookmark = bookmarks.add(yargs);
        if(bookmark) {
            console.log(`The Bookmark added: ${bookmark.title}`);
            bookmarks.log(bookmark);
        } else {
            console.log("The bookmark you tried to add is already in our database.");
        }
        break;

    /**
     * read command
     */
    case 'read':
        const get_bookmark = bookmarks.get(yargs);
        if(get_bookmark) {
            console.log('bookmark read');
            bookmarks.log(get_bookmark);
        } else {
            console.log('No bookmark found.');
        }
        break;

    /**
     * remove command
     */
    case 'remove':
        const removed_bookmark = bookmarks.remove(yargs);
        if(removed_bookmark) {
            console.log(`bookmark removed: ${removed_bookmark}`);
        } else {
            console.log('No bookmark removed');
        }
        break;

    /**
     * list command
     */
    case 'list':
        const get_bookmarks = bookmarks.getAll();
        if(get_bookmarks) {
            console.log("Printing: " + get_bookmarks.bookmarkNumber);
            get_bookmarks.bookmarks.forEach( (bookmark) => {
                bookmarks.log(bookmark);
            });
        }
        break;

    /**
     * search command
     */
    case 'search':
        const foundBookmarks = bookmarks.search(yargs);
        if(foundBookmarks) {
            console.log(`(${foundBookmarks.bookmarkNumber}) found`)
            foundBookmarks.bookmarks.forEach( (bookmark) => {
                bookmarks.log(bookmark);
            });
        } else {
            console.log("No Bookmark found");
        }
        break;

    default:
        console.log('No Command Specified.');

}
