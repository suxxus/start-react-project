module.exports = {
    getJsonFromFile: function(file) {

        var fs = require('fs');

        var readJsonFileSync = function(filepath, encoding) {
            
            if (typeof(encoding) === 'undefined') {
                encoding = 'utf8';
            }

            try {

                var file = fs.readFileSync(filepath, encoding);
                return JSON.parse(file);
            } catch (e) {

                console.log(e);
            }
        };

        return readJsonFileSync(file);
    }
};
