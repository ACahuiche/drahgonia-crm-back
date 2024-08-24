const userDAO = require('../DAO/userDAO');
const security = require('../tools/security');

class UserService {

  dataValidateID(userId) {
    if (!userId || userId.trim() == '' || userId == 'undefined') {
      throw new Error("The user ID is Empty");
    }

    if (typeof userId !== 'string') {
      throw new Error("Invalid ID type. ID must be a string.");
    }

    return true;
  }

  allDataValidate(userData) {
    if (!userData) {
      throw new Error("The info of user is Empty");
    }

    if (!userData.userName || userData.userName.trim() == '' || userData.userName == 'undefined') {
      throw new Error("The user name is Empty");
    }

    if (!userData.userEmail || userData.userEmail.trim() == '' || userData.userEmail == 'undefined') {
      throw new Error("The user email is Empty");
    }

    if (!userData.userPassword || userData.userPassword.trim() == '' || userData.userPassword == 'undefined') {
      throw new Error("The user password is Empty");
    }

    if (!userData.hasOwnProperty('isAdmin')) {
      userData.isAdmin = false;
    }

    return true;

  }


  async dataValidateToSave(newUserData) {

    if (this.allDataValidate(newUserData)) {
      let passEncrypt = security.encryptPassword(newUserData.userPassword);
      newUserData.passEncrypt = passEncrypt;

      return await userDAO.save(newUserData);
    }

  }

  async dataValidateToUpdate(userId, newUserData) {

    if (this.dataValidateID(userId)) {
      if (this.allDataValidate(newUserData)) {
        let passEncrypt = security.encryptPassword(newUserData.userPassword);
        newUserData.passEncrypt = passEncrypt;

        return await userDAO.update(userId, newUserData);
      }
    }
  }

  async dataValidateToDelete(userId) {
    if (this.dataValidateID(userId)) {
      return await userDAO.delete(userId);
    }
  }

  async dataValidateToGetUserById(userId) {
    if (this.dataValidateID(userId)) {
      return await userDAO.getById(userId);
    }
  }

  async getAllData() {
    return await userDAO.getAll();
  }
}

module.exports = new UserService();