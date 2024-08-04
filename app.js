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
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');


//Endpoints
app.use('/auth', authRoutes);
//app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Drahgonia CRM server running in port ${port}`);
});


