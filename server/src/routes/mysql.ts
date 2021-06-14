import express from 'express';
import mysql from 'mysql';

var router = express.Router();

router.get("*", function (req, res, next) {
    var connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    })
    connection.connect();
    connection.query('SELECT * FROM Work_Order LIMIT 28', function (error, results, fields) {
        if (error) throw error;
        res.send(results);
        // console.log('The solution is: ', results[0]);
    });
    connection.end();
});

module.exports = router;
export default router;