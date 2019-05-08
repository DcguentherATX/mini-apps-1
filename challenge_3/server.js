const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const { connection } = require('./db/config');
//console.log(connection);

app.use(express.static('public'));
app.use(bodyParser());

app.get('/api', (req, res) => {
    connection.query(`select * from practice;`, (err, user) => {
        if (err) {
            console.log(err)
            res.end();
        }
        res.send(user);
    })
});

app.post('/', (req, res) => {
    const user = {
        name: 'David',
        age: 36
    }
    const queryString = `insert into practice (name, age) values ('${user.name}', '${user.age}')`
    connection.query(queryString, (err, user) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.send('successfully added to db');
        }
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));