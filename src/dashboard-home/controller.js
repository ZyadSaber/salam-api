const pool = require("../../db.js");
const queries = require('./queries');

const getDashBoard = (req, res)=>{
    res.send({
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    })
}


module.exports = {
getDashBoard,
}