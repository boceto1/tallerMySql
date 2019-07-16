const Sequalize = require('sequelize');
const sequelize = require('../common/mariadb');

sequelize.sync();

const Brand = sequelize.define('Brand',{
    id:{
      type:Sequalize.BIGINT(11),
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: Sequalize.STRING(100),
      allowNull: false
    }
});


module.exports= Brand;