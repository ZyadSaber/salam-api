const pool = require("../../db.js");
const queries = require('./queries');

const getUsers = (req, res)=>{

}

const postUsers = (req, res) =>{
    const {query_status} = req.body

    if (query_status === "n") {

    } else if (query_status === "u"){

    } else if (query_status === "d"){

    } else {
        res.status(500).send({response: error in JSON})
    }
}

const popUsers = (req, res) => {

}


const userLogIn = (req, res)=>{
    const sessionId = Date.now()
    const {user_name, user_password} = req.body
    pool.query(queries.checkUserNameExist, [user_name], (error, result) => {
        if(error){
            res.status(500).send(error)
        }
        if (result.rows.length === 0){
            res.status(500).send({response: "Please Check Your user name and password"})
        }else{
            pool.query(queries.checkUserNameAndPassword, [user_name, user_password], (error, result)=>{
        if(error){
            res.status(500).send(error)
        }
        if (result.rows.length === 0){
            res.status(500).send({response: "Please Check Your user name and password"})
        }else{
            res.status(200).send({response: "success", authorization: sessionId, display_name: result.rows[0].display_name})
        }
    })
        }
    })
    
}

module.exports = {
getUsers,
postUsers,
popUsers,
userLogIn
}