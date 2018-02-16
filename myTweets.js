var twitter = require('twitter');
var keys = require('./keys.js');
var twitterKeys = keys.twitterKeys;
var log = require("./log.js");

function myTweets() {

    log("node liri.js my-tweets");
	var client = new twitter(twitterKeys);
    var params = {screen_name: 'liricolt', count: 20};

	client.get('statuses/user_timeline', params, function(error, tweets, response) {
		if (error) {            
            log("can't read tweets "+JSON.stringify(error));
            console.log(JSON.stringify(error));
		} else {
			var tweetsList= "My Tweets:\n";
			for (var i = 0; i < tweets.length; i++) {
				tweetsList += "Created at: " + tweets[i].created_at + '\n' + 
							  "Tweet's text: " + tweets[i].text + '\n' 
            }
            console.log(tweetsList);
            log("myTweets list "+tweetsList);
		}
	});
}

module.exports = myTweets;