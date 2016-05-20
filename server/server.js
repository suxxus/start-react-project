var express = require('express'),
    compression = require('compression'),
    bodyparser = require('body-parser'),
    path = require('path'),
    data = path.join(__dirname, 'data'),
    port = process.env.PORT || 8080,
    moment = require('moment'),
    cors = require('cors'),
    jsonfileservice = require('./utils/jsonfilesrv'),
    api = require('./end-points-serv/api'),
    CONCURRENCY = process.env.WEB_CONCURRENCY || 1;

// Configure CORS for localhost access
var app = express();
app.use(cors());
app.use(compression());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

api(app, {
    data: data,
    file: 'data.json',
    getJson: jsonfileservice.getJsonFromFile
});

var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
