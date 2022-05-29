const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];

//회원 정보 테이블
const User = require('./user');
const JobObj = require('./jobobjective');
const TechStack = require('./techstack');

//프로젝트 테이블
const Project = require('./project');
const ProjectPost = require('./projectpost');

//각 카테고리 별 페이지
const Web = require('./web');
const Mobile = require('./mobile');
const Data = require('./dataanaly');
const Ai = require('./ai');
const Question = require('./question');

const db = {};

const sequelize = new Sequelize(
    config.database, config.username, config.password, config,
  )

db.sequelize = sequelize;

//회원 정보 테이블
db.User = User;
db.JobObj = JobObj;
db.TechStack = TechStack;

//프로젝트 테이블
db.Project = Project;
db.ProjectPost = ProjectPost;

//각 카테고리 페이지
db.Web = Web;
db.Mobile = Mobile;
db.Ai = Ai;
db.Data = Data;
db.Question = Question;

//회원 정보 테이블
User.init(sequelize);
JobObj.init(sequelize);
TechStack.init(sequelize);

//프로젝트 테이블
Project.init(sequelize);
ProjectPost.init(sequelize);

//각 카테고리 페이지
Web.init(sequelize);
Mobile.init(sequelize);
Ai.init(sequelize);
Data.init(sequelize);
Question.init(sequelize);


User.associate(db);
JobObj.associate(db);
TechStack.associate(db);

//프로젝트 테이블
Project.associate(db);
ProjectPost.associate(db);

//각 카테고리 페이지
Web.associate(db);
Mobile.associate(db);
Ai.associate(db);
Data.associate(db);
Question.associate(db);



module.exports = db;