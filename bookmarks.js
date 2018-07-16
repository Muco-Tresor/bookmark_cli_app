
const fs = require('fs');
/**
 * [fetch all bookmarks from json file]
 * @return {[array]} [if found return bookmark else return empty array]
 */
const fetchBookmarks = () => {
	try {
		const bookmarks = JSON.parse(
			fs.readFileSync('./bookmarks-json-data.json')
		);

		return bookmarks;
	} catch(error) {
		return [];
	}
}

/**
 * [save bookmarks]
 * @param  {[array]} bookmarks [array of objects]
 * @return {[undefined]}           [nothing returned]
 */
const saveBookmarks = (bookmarks) => {
	fs.writeFileSync('./bookmarks-json-data.json', JSON.stringify(bookmarks));
}


/**
 * [fancy log function]
 * @param  {[object]} bookmark [bookmark]
 * @return {[undefined]}          [nothing return]
 */
const log = (bookmark) => {
	console.log('==================');
	console.log(`'Title: ' ${bookmark.title}`);
	console.log(`'Url: ' ${bookmark.url}`);
}
/**
 * [add a bookmark]
 * @param  {[string]} options.title [bookmark title]
 * @param  {[string]} options.url   [bookmark url]
 * @return {[object]}               [added bookmark]
 */
const add = ({title, url}) => {

    //init variables
    let bookmarks = [];
    const bookmark = {title, url};

    bookmarks = fetchBookmarks();

    /**
     * [filter duplicates bookmarks]
     * @param  {[object]} (bookmark [bookmarks object]
     * @return {[array]}           [duplication bookmarks]
     */
    const duplicateBookmarks = bookmarks.filter( (bookmark) => {
    	return bookmark.title === title;
    });

    if(duplicateBookmarks.length === 0) {
    	bookmarks.push(bookmark);
    	saveBookmarks(bookmarks);
    	return bookmark;
    }
}


/**
 * [find a bookmark]
 * @param  {[string]} options.title [a bookmark title]
 * @return {[object]}               [ a bookmark]
 */
const get = ({title}) => {
    const bookmarks = fetchBookmarks();
    return bookmarks.filter( (bookmark) => bookmark.title === title)[0];
}

/**
 * [remove a bookmark]
 * @param  {[string]} options.title [a bookmark title]
 * @return {[object]}               [a removed bookmark]
 */
const remove = ({title}) => {
    const bookmarks = fetchBookmarks();
    const filteredOutBookmarks = bookmarks.filter( (bookmark) => {
        return bookmark.title !== title;
    });

    if(bookmarks.length !== filteredOutBookmarks.length) {
        saveBookmarks(filteredOutBookmarks);
        return title;
    }
}

const getAll = () => {
    const bookmarks = fetchBookmarks();
    const bookmarksNumber = bookmarks.length > 1
                            ? `(${bookmarks.length}) notes`
                            : `(${bookmarks.length}) note`;

    return {
        bookmarkNumber: bookmarksNumber,
        bookmarks: bookmarks
    };
}

//export modules
module.exports = {
    add,
    get,
    getAll,
    remove,
    log,

}