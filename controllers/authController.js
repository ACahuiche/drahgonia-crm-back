const authService = require('../services/authService');

class AuthController {
  async authtenticateUser(req, res) {
    let data = req.body;

    try {
      let token = await authService.validateUserData(data);

      res.status(200).json({
        success: true,
        token: token
      });
    } catch (error) {
      res.status(401).json({
        success: false,
        error: `${error}`
      });
    }
  }
}

module.exports = new AuthController();