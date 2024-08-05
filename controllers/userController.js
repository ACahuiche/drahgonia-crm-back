const userService = require ('../services/userService');

class UserController {
  async saveUser(req, res) {
    let newUserData = req.body;
    try{
      let userDataSave = await userService.dataValidateToSave(newUserData);
      res.status(200).json({
        success:true,
        message: `The new user ${userDataSave} is save`
      }); 
    }
    catch(error){
      res.status(401).json({
        success: false,
        message: `Save user error: ${error}`
      });
    }
  }
}

module.exports = new UserController();