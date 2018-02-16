var fs = require('fs');
var log = require("./log.js");
var spotifyThisSong = require("./spotifyThisSong.js");

function doWhatItSays() {

    
    fs.readFile("random.txt", "utf8", function(error, data){
        if (!error) {
            parsTxt = data.split(",");
            spotifyThisSong(parsTxt[1]);
            console.log(parsTxt[1]);
            log(data);
        } else {
            log(error);
            console.log("can't read random.txt: " + error);
        }
    });
};
module.exports = doWhatItSays;