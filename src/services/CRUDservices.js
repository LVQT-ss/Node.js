const connection = require("../config/database");
const getAllUsers = async () => {
    let [results, fields] = await connection.query('select * from Users');
    return results;
}
const getUsersbyId = async (userID) => {
    let [results, fields] = await connection.query('select * from Users where id = ?', [userID]);


    let user = results && results.length > 0 ? results[0] : {};
    return user;
}
const updateUserbyId = async (email, city, name, userId) => {

    let [results, fields] = await connection.query(
        `
UPDATE Users 
SET email = ?, city= ?, name=?
WHERE id = ?
`, [email, city, name, userId]
    );
}
module.exports = {
    getAllUsers,
    getUsersbyId,
    updateUserbyId
}