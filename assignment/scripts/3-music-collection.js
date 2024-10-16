console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

//Create an empty array named myCollection
let myCollection = [];

//Create a function named addToCollection
function addToCollection(collection, title, artist, yearPublished) {
//Create a new object having the above properties
let album = {
  title: title,
  artist: artist,
  yearPublished: yearPublished,
};
//Add the new object to the end of the collection array.
collection.push(album);
//return the newly created object
return album;
}




// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
