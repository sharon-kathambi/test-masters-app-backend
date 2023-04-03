const mysql = require('mysql');

var db;

connectDatabase = () => {
    if(!db) {
        db = mysql.createConnection({
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
        });

        db.connect((err) => {
            if (err) throw err;
            console.log('Connected to database');
        })
    }
    return db;
};

module.exports = connectDatabase();