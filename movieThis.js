var request = require('request');
var log = require("./log.js");

function movieThis(movie){

    if(!movie){
        movie = "Mr. Nobody";
    }
    request("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&r=json&tomatoes=true&apikey=40e9cece", function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var movieObject = JSON.parse(body);
            var movieResults = "Title: " + movieObject.Title+"\r\n"+
            "Year: " + movieObject.Year+"\r\n"+
            "IMDB Rating: " + movieObject.imdbRating+"\r\n"+
            "Rotten Tomatoes Rating: " + movieObject.tomatoRating+"\r\n"+
            "Country: " + movieObject.Country+"\r\n"+
            "Language: " + movieObject.Language+"\r\n"+
            "Plot: " + movieObject.Plot+"\r\n"+
            "Actors: " + movieObject.Actors;

            console.log(movieResults);
            log(movieResults);  

        } else {
            console.log("movie error :"+ error);
            log(error);  
        }
    });
};

module.exports = movieThis;