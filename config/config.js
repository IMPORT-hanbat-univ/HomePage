require('dotenv').config();
const env = process.env;
 
const development = {
  username: "root",
  //env.MYSQL_USERNAME은 불러오고자 하는 데이터의 키값이므로 자유롭게 이름설정이 가능하다.
  password: null,
  database: "importhomepage",
  host: "127.0.0.1",
  dialect: "mysql",
  //port: env.MYSQL_PORT
};
 
const production = {
  username: env.RDS_USERNAME,
  password: env.RDS_PASSWORD,
  database: env.RDS_NAME,
  host: env.RDS_HOSTNAME,
  dialect: "mysql",
  //port: env.MYSQL_PORT
};
 
const test = {
  username: "root",
  password: null,
  database: "database_test",
  host: "127.0.0.1",
  dialect: "mysql",
  //port: env.MYSQL_PORT
};
 
module.exports = { development, production, test };