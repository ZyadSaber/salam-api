const pool = require("../../db.js");
const queries = require('./queries');

const getDashBoard = (req, res)=>{
    res.send({
        labels: [],
        datasets: [
            {
                label: '',
                data: [],
                // backgroundColor: [
                //     "rgba(75,192,192,1)",
                //     "#ecf0f1",
                //     "#50AF95",
                //     "#f3ba2f",
                //     "#2a71d0",
                // ],
                // borderColor: "black",
                // borderWidth: 2,
            },
        ],
    })
}


module.exports = {
getDashBoard,
}