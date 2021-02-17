var mongoose = require("mongoose");

mongoose.Promise = global.Promise;

//change the database with yours
mongoose.connect(
  "mongodb+srv://name:password@cluster0-mtl3r.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

module.exports = { mongoose };
