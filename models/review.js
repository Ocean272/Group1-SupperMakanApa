const { Model, DataTypes } = require("sequelize");
const { Location } = require("./location");
const { User } = require("./user");
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
      location_id: {
        type: DataTypes.INTEGER,
        references: {
          model: Location,
          key: 'id'
        }
      },
      user_id: {
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
