const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(express.static('client'));
app.use(bodyParser());

app.get('/', function (req, res) {
    res.send('Hello World!')}
    );

app.post('/', function (req, res) {
    let wreck = req.body;
    let valArr = Object.values(wreck);
    //console.log('values', valArr);
    let stringed = valArr.toString();
    stringed.replace(/(\r\n|\n|\r)/gm,"");
    console.log('valor', JSON.parse(stringed));
    res.send()}
    )

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

