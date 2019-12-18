var mongoose = require('mongoose');


var uri = "mongodb+srv://jwood6:8#56DA**iT2C@space-tourism-cluster-1tycr.azure.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true});

var _db = mongoose.connection;
_db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = mongoose;