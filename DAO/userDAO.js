const userModel = require("../models/userModel");

class UserDAO {
  async save(newUserData){
    try{
      const doc = await userModel.create({
        userName: newUserData.userName,
        userEmail: newUserData.userEmail,
        userPassword: newUserData.passEncrypt,
        isAdmin: newUserData.isAdmin
      });

      if(!doc){
        throw new Error("Could not save user");
      }
      else{
        return doc.userName;
      }
    }
    catch(error){
      throw error;
    }
  }
}

module.exports = new UserDAO();