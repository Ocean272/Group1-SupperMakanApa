const { Model, DataTypes } = require("sequelize");
const { Location, User } = require(".");
const location = require("./location");

module.exports = function (sequelize){
  class Review extends Model {}

  Review.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      locationId: {
        type: DataTypes.INTEGER,
        references: {
          model: Location,
          key: 'id'
        }
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: User,
          key: 'id'
        }
      },
      review: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
          type: DataTypes.DATE,
          field: "createdAt",
      },
      updatedAt: {
          type: DataTypes.DATE,
          field: "updatedAt",
      },
    },
    {
      sequelize,
      tableName: "review",
      modelName: "Review",
    }
  );

  return Review;
};
