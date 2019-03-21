var friendsData = [
    {
    "name":"Ahmed",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
    },
    {
    "name":"Ashley",
    "photo":"https://depositphotos.com/117506590/stock-photo-nice-joyful-woman-eating-salad.html",
    "scores":[
            2,
            4,
            1,
            5,
            5,
            1,
            3,
            3,
            2,
            1
          ]
    },
    {
        "name":"Robert",
        "photo":"https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiH4a6zj5LhAhVH_J4KHelzAT8QjRx6BAgBEAU&url=https%3A%2F%2Fwww.istockphoto.com%2Fno%2Fphotos%2Fmen&psig=AOvVaw1Os6_1XSepuyyrif2YY_8p&ust=1553219425894955",
        "scores":[
            1,
            2,
            4,
            4,
            2,
            5,
            2,
            5,
            3,
            5
          ]
        }
  ];

  var addFriend = function(app) {
      app.post("/survey", function(req, res) {
          var newFriend = req.body;
          friendsData.push(newFriend);
          res.send(friendsData);
      });
  };

  module.exports = friendsData;
  module.exports.addFriend = addFriend;