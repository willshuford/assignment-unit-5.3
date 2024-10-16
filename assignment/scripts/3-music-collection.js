console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

//Create an empty array named myCollection
let myCollection = [];

//Create a function named addToCollection
function addToCollection(collection, title, artist, yearPublished) {
//Create a new object having the above properties
let album = {
  collection: collection,
  title: title,
  artist: artist,
  yearPublished: yearPublished,
};
//Add the new object to the end of the collection array.
collection.push(album);
//return the newly created object
return album;
}

//Add 6 albums to the myCollection array, console.log each album as added using the function's returned value.
console.log(addToCollection(myCollection, "The Black Album", "Jay Z", "2003"));
console.log(addToCollection(myCollection, "Purple Rain", "Prince", "1984"));
console.log(addToCollection(myCollection, "Reasonable Doubt", "Jay Z", "1996"));
console.log(addToCollection(myCollection, "Kind of Blue", "Miles Davis", "1959"));
console.log(addToCollection(myCollection, "Mingus Ah Um", "Charles Mingus", "1959"));
console.log(addToCollection(myCollection, "Bad", "Michael Jackson", "1987"));

//console.log the myCollection array
console.log(myCollection);

//Create a function named showCollection
function showCollection (collection) {
  for (i=0; i<collection.length; i++){
    console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}.`);
  }
}
//Use and test the showCollection function
showCollection(myCollection);



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
