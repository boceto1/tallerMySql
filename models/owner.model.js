const Sequalize = require('sequelize');
const sequelize = require('../common/mariadb');

sequelize.sync();

const Owner = sequelize.define('Owner',{
    dni:{
        type:Sequalize.STRING(10),
        allowNull:false,
        primaryKey: true,
        validate: {
            is: ["^[0-9]*$"]
        }
    },
    name:{
        type: Sequalize.STRING(100),
        allowNull: false
    },
    date:{
        type: Sequalize.DATE,
    }
});

module.exports = Owner;