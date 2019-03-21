var friendsData = require('../data/friend.js');

module.exports = function(app) {
    app.get("/api/friends", function(req, res){
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {
        var perfectMatch = {
            name: "",
            photo: "",
            friendDifference = 1000
        };

        var userData = req.body;
        var userScores = userData.scores;

        var totalDifference = 0;

        //Loops through friendfinder in Database
        for (var i = 0; i < friendsData.length; i++) {
            totalDifference = 0;

            //Looping through every score within the friendfinder Database.
            for (var j = 0; j <friendsData[i].scores[j]; j++) {
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendsData[i].scores[j]));
               
            if (totalDifference <= perfectMatch.friendsDifference) {
                perfectMatch.name = friendsData[i].name;
                perfectMatch.photo = friendsData[i].photo;
                perfectMatch.friendDifference = totalDifference;
            }
        }
            
    }

    friendsData.push(userData);
    
    res.json(perfectMatch)

    });
}