var express = require('express');
var path = require('path');
var router = express.Router();

var app = express();

router.get('/', (req, res) => {
    res.sendFile(path.join('/index.html'));
});

router.get('/about', (req, res) => {
    res.sendFile()
});

app.use(express.static(__dirname + '/public/smartedu'));

app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');