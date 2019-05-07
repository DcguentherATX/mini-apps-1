const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(express.static('client'));
app.use(bodyParser());

app.get('/', function (req, res) {
    console.log('GET')
    res.send('Hello World!')}
    );

app.post('/', function (req, res) {
    let wreck = req.body;
    let valArr = Object.values(wreck);
    let results = [];
    let parsedData = JSON.parse(valArr);
    let keys = Object.keys(parsedData);
    keys.pop();
    keys.map((key) => results.push(key));
    results.push('\n');

    var nested = function(obj) {
        for (var key in obj) {
            if (key !== 'children') {
                results.push(obj[key]);
            } else if (key === 'children' && obj.children.length > 0) {
                for (var i = 0; i < obj.children.length; i++) {
                    results.push('\n');
                    nested(obj.children[i]);
                }
            }
        }
    }
    nested(parsedData);
    let joined = results.join();
    
    var str2 = joined.replace(/^,+/gm, '');
    var str3 = str2.replace(/,\s*$/gm, "");
    console.log(str3);
    res.send(str3);
});

app.listen(port, () => console.log(`CSV Generator listening on port ${port}!`))

