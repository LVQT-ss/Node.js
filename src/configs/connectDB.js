// get the client
import mysql from 'mysql2';

// create the connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'nodejsbasic'
});

// simple query
connection.query(
    'SELECT * FROM `users` ',
    function (err, results, fields) {
        console.log('check my sql ')
        // Use results instead of rows
        let rows = results.map((row) => { return row });
        console.log(results); // results contains rows returned by the server
        console.log(rows); // fields contains extra metadata about results, if available
    }
);

export default connection;
