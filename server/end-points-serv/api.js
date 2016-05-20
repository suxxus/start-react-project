var path = require('path');

module.exports = function(app, opts) {

    app.get('/api/data', function(req, res) {

        var file = path.format({
            dir: opts.data,
            base: opts.file
        });

        console.log('---> ', file);

        var data = opts.getJson(file);
        res
            .status(200)
            .send(JSON.stringify(data));
    });

    app.post('/api/data', function(req, res) {
        res.sendStatus(200);
    });

    app.delete('/api/data', function(req, res) {
        res.sendStatus(200);
    });

    app.put('/api/data', function(req, res) {
        res.sendStatus(200);
    });
}
