var mongoose = require('mongoose');


var db = mongoose.connection;
db.on('err', (err) => { console.log('There was an error connecting to the database.') })
db.on('open', () => { console.log('Connected to database') })

mongoose.connect('mongodb://test:test@ds135534.mlab.com:35534/qme');

module.exports = db;