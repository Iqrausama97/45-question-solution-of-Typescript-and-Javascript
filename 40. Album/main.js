function makeAlbum(title, artist, tracks) {
    var album = { title: title, artist: artist };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}
console.log(makeAlbum('Thriller', 'Michael Jackson', 12));
console.log(makeAlbum('The Beatles', 'Abbey Road', 15));
console.log(makeAlbum('The Dark Side of the Moon', 'Pink Floyd', 10));
