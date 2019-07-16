const Sequalize = require('sequelize');
const sequelize = require('../common/mariadb');
const Brand = require('./brand.model');
const Model = require ('./model.model');
const Owner = require('./owner.model')

const Car = sequelize.define('Car',{
    plate: {
      type: Sequalize.STRING(8),
      allowNull:false,
      primaryKey: true
    },
    brand: {
      type: Sequalize.BIGINT(11),
      allowNull:false,
      reference:{
        model: Brand,
        key:'id'
      }
    },
    model:{
      type: Sequalize.BIGINT(11),
      allowNull:false,
      reference:{
        model: Model,
        key:'id'
      }
    },
    year:{
      type:Sequalize.INTEGER(4),
      allowNull: false
    },
    transmition:{
      type: Sequalize.STRING(3),
      validate:{
        isIn: [['MAN', 'AUT']], 
      }
    },
    owner:{
      type: Sequalize.BIGINT(11),
      allowNull:false,
      reference:{
        model: Owner,
        key:'dni'
      }
    }
});


module.exports = Car;