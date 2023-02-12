const checkUserNameAndPassword = "SELECT * FROM users WHERE user_name = $1 AND user_password = $2";
const checkUserNameExist = "SELECT * FROM users WHERE user_name = $1 "

module.exports =  {
    checkUserNameExist,
    checkUserNameAndPassword
}