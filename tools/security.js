const bcrypt = require("bcrypt");
const config = require("../config/securityConfig").encryption;

class SecurityTool {
  encryptPassword(password){
    let hash = bcrypt.hashSync(password, config.salts);
    return hash;
  }

  verifyPassword(password, dbPass){
    return bcrypt.compare(password, dbPass);
  }
}

module.exports = new SecurityTool();