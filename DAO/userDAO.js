const userModel = require("../models/userModel");

class UserDAO {

  async getAll() {
    try {
      const users = await userModel.find();

      if (!users || users.length === 0) {
        throw new Error("No hay usuarios registrados");
      } else {
        return users;
      }
    } catch (error) {
      throw error;
    }
  }

  async getById(userId) {
    try {
      if (typeof userId !== 'string') {
        throw new Error("ID invalido. ID debe ser un string.");
      }

      const user = await userModel.findById(userId);

      if (!user) {
        throw new Error("Usuario no encontrado");
      } else {
        return user;
      }
    } catch (error) {
      throw error;
    }
  }

  async save(newUserData) {
    try {

      const verificarCorreo = await userModel.findOne({userEmail: newUserData.userEmail});

      if(verificarCorreo){
        throw new Error("El correo ya ha sido registrado");
      }

      const doc = await userModel.create({
        userName: newUserData.userName,
        userEmail: newUserData.userEmail,
        userPassword: newUserData.passEncrypt,
        isAdmin: newUserData.isAdmin
      });

      if (!doc) {
        throw new Error("El usuario no ha podido guardarse");
      }
      else {
        return doc;
      }
    }
    catch (error) {
      throw error;
    }
  }

  async update(userId, updatedUserData) {
    try {
      const updatedUser = await userModel.findByIdAndUpdate(
        userId,
        {
          userName: updatedUserData.userName,
          userEmail: updatedUserData.userEmail,
          userPassword: updatedUserData.passEncrypt,
          isAdmin: updatedUserData.isAdmin
        },
        { new: true, runValidators: true }
      );

      if (!updatedUser) {
        throw new Error("No ha sido posible actualizar la informacion de usuario");
      } else {
        return updatedUser;
      }
    } catch (error) {
      throw error;
    }
  }

  async delete(userId) {
    try {
      const deletedUser = await userModel.findByIdAndDelete(userId);

      if (!deletedUser) {
        throw new Error("No fue posible eliminar al usuario");
      } else {
        return deletedUser;
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new UserDAO();