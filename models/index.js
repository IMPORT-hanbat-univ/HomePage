const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

const sequelize = new Sequelize(
    config.database, config.username, config.password, config,
  )

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./user')(sequelize,Sequelize);
db.JobObj = require('./jobobjective')(sequelize,Sequelize);
db.TechStack = require('./techstack')(sequelize, Sequelize);



db.Project = require('./project')(sequelize,Sequelize);
db.ProjectPost = require('./projectpost')(sequelize,Sequelize);


db.Web = require('./web')(sequelize, Sequelize);
db.Mobile = require('./mobile')(sequelize, Sequelize);
db.Data = require('./dataanaly')(sequelize, Sequelize);
db.Ai = require('./ai')(sequelize, Sequelize);
db.Question = require('./question')(sequelize, Sequelize);

//1:1관계 코드

//1:N관계 코드

db.Project.hasMany(db.Project, { foreginKey: 'project_post_num', sourceKey: 'id'});
db.ProjectPost.belongsTo(db.User, { foreginKey: 'project_post_num', targetKey: 'id'});

db.User.hasMany(db.Web, { foreginKey: 'web_post_num', sourceKey: 'id'});
db.Web.belongsTo(db.User, { foreginKey: 'web_post_num', targetKey: 'id'});

db.User.hasMany(db.Mobile, { foreginKey: 'mobile_post_num', sourceKey: 'id'});
db.Mobile.belongsTo(db.User, { foreginKey: 'mobile_post_num', targetKey: 'id'});

db.User.hasMany(db.Data, { foreginKey: 'data_post_num', sourceKey: 'id'});
db.Data.belongsTo(db.User, { foreginKey: 'data_post_num', targetKey: 'id'});

db.User.hasMany(db.Ai, { foreginKey: 'ai_post_num', sourceKey: 'id'});
db.Ai.belongsTo(db.User, { foreginKey: 'ai_post_num', targetKey: 'id'});

db.User.hasMany(db.Question, { foreginKey: 'question_post_num', sourceKey: 'id'});
db.Question.belongsTo(db.User, { foreginKey: 'question_post_num', targetKey: 'id'});



//N:M관계의 코드
db.User.belongsToMany(db.JobObj,{ through: 'jobobjectivesconnection' });
db.JobObj.belongsToMany(db.User,{ through: 'jobobjectivesconnection' });

db.User.belongsToMany(db.TechStack,{ through: 'techstackconnection' });
db.TechStack.belongsToMany(db.User,{ through: 'techstackconnection' });

db.User.belongsToMany(db.Project,{ through: 'projectconnection' });
db.Project.belongsToMany(db.User,{ through: 'projectconnection' });




module.exports = db;
