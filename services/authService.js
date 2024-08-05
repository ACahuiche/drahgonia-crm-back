const authDAO = require("../DAO/authDAO");

class AuthService {
  async validateUserData(userData) {
    if (userData.userEmailData.trim() == "" || userData.userEmailData == "undefined" ||
    userData.passwordData.trim() == "" || userData.passwordData == "undefined") {
      throw new Error("Some data is empty, validate the username os password");
    }
    else {
      return await authDAO.loginAuth(userData);
    }
  }
}

module.exports = new AuthService();