const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize = new Sequelize(config.database, config.username, config.passoword, config);


db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Web = require('./web')(sequelize, Sequelize);
db.Mobile = require('./mobile')(sequelize, Sequelize);
db.Data = require('./dataanaly')(sequelize, Sequelize);
db.Ai = require('./ai')(sequelize, Sequelize);
db.Question = require('./question')(sequelize, Sequelize);



module.exports = db;
