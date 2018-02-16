var Spotify = require('node-spotify-api');
var keys = require('./keys.js');
var log = require("./log.js");

var spotifyKeys = keys.spotifyKeys;
var spotify = new Spotify(spotifyKeys);



function spotifyThisSong(songName) {
    if(!songName){
        songName = "The Sign Ace of Base";
    }
    params = songName;
    spotify.search({ type: "track", query: params }, function(err, data) {
        if(!err){
            var songInfo = data.tracks.items;
            for (var i = 0; i < 5; i++) {
                if (songInfo[i] != undefined) {
                    var spotifyResults = "search result # " + Number(i+1) + ":\n"+
                    "Artist(s): " + songInfo[i].artists[0].name + "\r\n" +
                    "The song's name: " + songInfo[i].name + "\r\n" +
                    "The album that the song is from: "  + songInfo[i].album.name + "\r\n" +
                    "A preview link of the song from Spotify: " + songInfo[i].preview_url;
                    console.log(spotifyResults);
                    log(spotifyResults);
                }
            }
        }	else {
            log(err);
            console.log("spotify error: "+ err);
        }
    });
};


module.exports = spotifyThisSong;