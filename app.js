const express = require("express");
const morgan = require("morgan");
const mongoosedb = require("./config/mongodbconnection");
const bodyParser = require("body-parser");
const cors = require('cors');
const port = 8030;
const app = express();

app.use(cors());

//parse application/json
app.use(bodyParser.json());

app.use(morgan("dev"));

//Import Routes files
// EJEMP const shortlinksRoutes = require ('./routes/shortlinksRoutes');


//Endpoints
//EJEMP app.use ('/', shortlinksRoutes);

app.listen(port, () => {
  console.log(`Drahgonia CRM server running in port ${port}`);
});


