const authDAO = require("../DAO/authDAO");
const serverAPIKey = require("../config/securityConfig").jwtconfig;

class AuthService {
  async validateUserData(userData) {
    if (typeof userData.userEmailData === "undefined"  || typeof userData.passwordData === "undefined" ||
      userData.userEmailData.trim() == "" || userData.passwordData.trim() == "") {
      throw new Error("Algunos campos estan vacios, verifica el correo o la contraseña");
    }

    if(typeof userData.apiKey === 'undefined' || userData.apiKey.trim == ""){
      throw new Error("No se envio la API Key, contacta al administrador para obtenerla");
    }

    if(userData.apiKey != serverAPIKey.backkey){
      throw new Error("La API Key es incorrecta");
    }

    return await authDAO.loginAuth(userData);
  }
}

module.exports = new AuthService();