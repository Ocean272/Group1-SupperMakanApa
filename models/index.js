const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('dbg1vai5c11ngg', 'lhkxzekrlxdftr', '211d822e04667b141377bd93186e9e8edf7cd2132360988fd644aab4f5177173', {
    host: 'ec2-3-224-8-189.compute-1.amazonaws.com',
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
