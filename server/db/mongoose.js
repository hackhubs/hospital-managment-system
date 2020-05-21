var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;

//change the database with yours
mongoose.connect("mongodb+srv://abhav:ab8988143226@cluster0-mtl3r.mongodb.net/test?retryWrites=true&w=majority",{useNewUrlParser:true , useUnifiedTopology:true});

module.exports = {mongoose};
