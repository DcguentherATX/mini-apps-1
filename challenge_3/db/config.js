const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Summer@08',
    database: 'test'
});

connection.connect((err) => {
    if (err) {
        throw err;
    }
    const tableQuery = `
    CREATE TABLE IF NOT EXISTS practice(
        name varchar(50) NOT NULL,
        age INT NOT NULL
    );`

    connection.query(tableQuery, (err, res) => {
        if (err) {
            throw err;
        }
        console.log('created table practice/or it exists')
    })
});

module.exports = { connection };