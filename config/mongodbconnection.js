var mongoose = require("mongoose");
var generalConfig = require("../environments/generalConfig");

mongoose.connect(`${generalConfig.mongoConnection}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then((db)=>console.log('Database connection success'))
.catch((err) => console.log(`Error: ${err}`));

module.exports = mongoose;