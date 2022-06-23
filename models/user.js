const { Model, DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  class User extends Model {}

  User.init(
    {
      username: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      createdAt: { 
        type: DataTypes.DATE,
        field: "createdAt" ,   
      },
      updatedAt: { 
          type: DataTypes.DATE,
          field: "updatedAt",
    },
    },
    {
      sequelize,
      freezeTableName: "user",
      modelName: "user",
    }
  );

  return User;
};
