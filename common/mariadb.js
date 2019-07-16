const config = require('../config');
const Sequelize = require('sequelize');

var sequelize = new Sequelize(
	config.mariaDb.database,
	config.mariaDb.username,
	config.mariaDb.password, {
		host: config.mariaDb.host,
		dialect: 'mariadb'
	}
);

module.exports = sequelize;