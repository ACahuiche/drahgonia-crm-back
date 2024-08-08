const securityJWTConfig = require('../config/securityConfig').jwtconfig;
const { createSecretKey } = require('crypto');
const jwt = require('jose')

class SecurityToken {

  async validate(req, res, next) {
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined') {
      const token = bearerHeader.split(" ")[1];

      const secretKey = createSecretKey(securityJWTConfig.secretKey, 'utf-8');
      try {
        const { payload, protectedHeader } = await jwt.jwtVerify(token, secretKey);
        next();
      } catch (error) {
        res.status(403).json({
          success:false,
          message: `The token session is incorrect`
        }); 
      }
    }
    else {
      res.status(403).json({
        success:false,
        message: `No session token detected`
      });
    }
  }

}

module.exports = new SecurityToken();
