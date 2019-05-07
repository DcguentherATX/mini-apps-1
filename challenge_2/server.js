const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(express.static('client'));

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/', function (req, res) {
    console.log('can you hear me');
    res.send('Got a POST request')}
    )

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

