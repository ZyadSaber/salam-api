const pool = require("../../db.js");
var path = require('path');

const getLogo = (req, res) => {
    var options = {
        root: path.join(__dirname)
    };
     
    res.sendFile("./Img/logo.png", options, function (err) {
        if (err) {
            console.log(err);
        }
    });
}

module.exports = {
    getLogo
}