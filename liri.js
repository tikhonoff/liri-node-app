
var inquirer = require('inquirer');
var myTweets = require("./myTweets.js");
var spotifyThisSong = require("./spotifyThisSong.js");
var movieThis = require("./movieThis.js");
var doWhatItSays = require("./doWhatItSays.js");
var log = require("./log.js");



var command = process.argv[2];

var  argmnts ="";
for (var i = 3; i < process.argv.length; i++) {
	argmnts += argmnts[i] + " ";
}

inquirer.prompt([
    {
        type: "list",
        name: "liriChoices",
        message: "liri.js can take in one of the following commands:",
        choices: [
			"my-tweets", "spotify-this-song", "movie-this", "do-what-it-says"
			]
			
	},
	{
		name: 'songName',
		message: 'what song do you want to spotify',
		type: 'input ',
		when: function(answers){
		  return answers.liriChoices === 'spotify-this-song';
		}
	},
	{
		name: 'movieName',
		message: 'what movie do you want to omdb',
		type: 'input ',
		when: function(answers){
		  return answers.liriChoices === 'movie-this';
		}
	}
]).then(function(user) {

		switch (user.liriChoices){
		case "my-tweets":
		myTweets(); 
		break;

		case "spotify-this-song":
		spotifyThisSong(user.songName);
		break;

		case "movie-this":
		movieThis(user.movieName);
		break;

		case "do-what-it-says":
		doWhatItSays();
		
		break;
		default:
		}
});
