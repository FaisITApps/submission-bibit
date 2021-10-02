const config =  require('../config/configDB');

const Seq = require('sequelize');
const sequelize = new Seq(config.DB, config.USER, config.PASSWORD, {
    host: config.HOST,
    dialect: config.dialect,
    operatorAliases: 0,
    pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle
    }
})

const db = {}
db.Sequelize = Seq;
db.sequelize = sequelize;

db.user = require('./user.model')(sequelize,Seq);
db.logSeacrh = require('./log-model')(sequelize,Seq);

module.exports = db;