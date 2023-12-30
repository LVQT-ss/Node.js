import connection from "../configs/connectDB";

let getHomePage = (req, res) => {
    //logic 

    // simple query
    let data = [];
    connection.query(
        'SELECT * FROM `users` ',
        function (err, results, fields) {
            // Use results instead of rows
            results.map((row) => {
                data.push({
                    id: row.id,
                    email: row.email,
                    address: row.address,
                    firstName: row.firstName,
                    lastName: row.lastName
                })


            });
            return res.render('index.ejs', { dataUser: data, test: 'abc string test' })
        });



}
module.exports = {
    getHomePage
}