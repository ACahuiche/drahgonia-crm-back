const dbconn = require("../config/mongodbconnection");
const { Schema } = dbconn;

const userInfo = new Schema({
    userName: {
      type: String,
      required: true
    },
    userEmail: {
      type: String,
      required: true
    },
    userPassword: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: false,
      default: false
    }
  });
  
  module.exports = dbconn.model("user", userInfo);