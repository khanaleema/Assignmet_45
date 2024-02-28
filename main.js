function makeAlbum(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
var album = makeAlbum("aalam", "ijazat");
console.log(album);
album = makeAlbum("ulfat", "junoon");
console.log(album);
album = makeAlbum("hally", "mushk");
console.log(album);
