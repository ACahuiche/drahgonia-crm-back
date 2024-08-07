const userService = require ('../services/userService');

class UserController {
  async saveUser(req, res) {
    let newUserData = req.body;
    try{
      let userDataSave = await userService.dataValidateToSave(newUserData);
      res.status(200).json({
        success:true,
        message: userDataSave
      }); 
    }
    catch(error){
      res.status(401).json({
        success: false,
        message: `Save user error: ${error}`
      });
    }
  }

  async updateUser(req, res) {
    let newUserData = req.body;
    try{
      let userDataUpdated = await userService.dataValidateToUpdate(newUserData.userId, newUserData);
      res.status(200).json({
        success:true,
        message: userDataUpdated
      }); 
    }
    catch(error){
      res.status(401).json({
        success: false,
        message: `Update user error: ${error}`
      });
    }
  }

  async deleteUser(req, res) {
    let idUserData = req.body.userId;
    try{
      let userDataDeleted = await userService.dataValidateToDelete(idUserData);
      res.status(200).json({
        success:true,
        message: userDataDeleted
      }); 
    }
    catch(error){
      res.status(401).json({
        success: false,
        message: `Delete user error: ${error}`
      });
    }
  }

  async getUserById(req, res) {
    let idUserData = req.body.userId;
    try{
      let userData = await userService.dataValidateToGetUserById(idUserData);
      res.status(200).json({
        success:true,
        message: userData
      }); 
    }
    catch(error){
      res.status(401).json({
        success: false,
        message: `Get User error: ${error}`
      });
    }
  }

  async getAll(req, res) {
    try{
      let usersData = await userService.getAllData();
      res.status(200).json({
        success:true,
        message: usersData
      }); 
    }
    catch(error){
      res.status(401).json({
        success: false,
        message: `Get Users error: ${error}`
      });
    }
  }
}

module.exports = new UserController();