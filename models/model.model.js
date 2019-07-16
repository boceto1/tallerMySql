const Sequalize = require('sequelize');
const sequelize = require('../common/mariadb');
const Brand = require('./brand.model');

sequelize.sync();

const Model = sequelize.define('Model',{
  id: {
		type: Sequalize.BIGINT(11),
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
  },
  codeBrand:{
    type: Sequalize.BIGINT(11),
    reference:{
      model: Brand,
      key:'id'
    }
  },
  name: {
    type: Sequalize.STRING(100),
    allowNull: false
  }
});

module.exports = Model;

