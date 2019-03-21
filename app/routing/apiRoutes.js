var friendsData = require('../data/friend.js');
var path = require('path');


module.exports = function(app, path) {
    app.get("/api/friends", function(req, res){
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {
        var perfectMatch = {
            name: "",
            photo: "",
            // friendDifference = 1000
        };

        //user data
        var userData = req.body;
        var userScores = userData.scores;

        var totalDifference = 0;

        //Loops through friendfinder in Database
        for (var i = 0; i < friendsData.length; i++) {
            totalDifference = 0;

            console.log(friendsData[i]);
            totalDifference = 0;

            //Looping through every score within the friendfinder Database.
            for (var j = 0; j <friendsData[i].scores[j]; j++) {
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendsData[i].scores[j]));
               
            if (totalDifference <= perfectMatch.friendsDataDifference) {

                perfectMatch.name = friendsData[i].name;
                perfectMatch.photo = friendsData[i].photo;
                perfectMatch.friendsDataDifference = totalDifference;
            }
        }
            
    }

    //saves to the user's inputted data to the database
    friendsData.push(userData);
    
    res.json(perfectMatch)

    });
}