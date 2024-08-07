const userModel = require("../models/userModel");

class UserDAO {

  async getAll() {
    try {
      const users = await userModel.find();

      if (!users || users.length === 0) {
        throw new Error("No users found");
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
        throw new Error("Invalid ID type. ID must be a string.");
      }

      const user = await userModel.findById(userId);

      if (!user) {
        throw new Error("User not found");
      } else {
        return user;
      }
    } catch (error) {
      throw error;
    }
  }

  async save(newUserData) {
    try {
      const doc = await userModel.create({
        userName: newUserData.userName,
        userEmail: newUserData.userEmail,
        userPassword: newUserData.passEncrypt,
        isAdmin: newUserData.isAdmin
      });

      if (!doc) {
        throw new Error("Could not save user");
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
        throw new Error("Could not update user");
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
        throw new Error("Could not delete user");
      } else {
        return deletedUser;
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new UserDAO();