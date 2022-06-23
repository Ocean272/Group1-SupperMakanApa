const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('d3fpq27b46ct8n', 'gxfycuowlyjazp', 'b3b4c032a56be20bcc5410ea35a7faf487852a194ade5d44e6ec498b9f380e50', {
    host: 'ec2-44-197-128-108.compute-1.amazonaws.com',
    dialect: 'postgres',
    dialectOptions:{
      ssl: {
        required: true,
        rejectUnauthorized: false
      }
    }
  }
);


// Import model(s)
const Location = require("./location")(sequelize);
const Review = require('./review')(sequelize);
const User = require('./user')(sequelize);

// Create associations
User.belongsToMany(Location, { through: 'review' });
Location.belongsToMany(User, { through: 'review' });

module.exports = {
  sequelize,
  Location,
  Review,
  User
};
