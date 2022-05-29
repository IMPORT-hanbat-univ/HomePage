var createError = require('http-errors');
var sequelize = require('./models').sequelize;
var express = require('express');
const session = require('express-session');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
const passport = require('passport'); // passport 모듈 추가
const flash = require('connect-flash');





const passportConfig = require('./passport');

// 메인 홈페이지
var indexRouter = require('./routes/index');
// 임원진
var executiveRouter = require('./routes/executive');
// 동아리 소개
var introduceRouter = require('./routes/introduce');
// 동아리 규칙
var ruleRouter = require('./routes/rule');
// 회의록
var meetingRouter = require('./routes/meeting');
// 프로젝트
var projectRouter = require('./routes/project');
// 웹
var webRouter = require('./routes/webs');
// 모바일
var mobileRouter = require('./routes/mobiles');
// 데이터 분석
var dataAnalysisRouter = require('./routes/dataanalies');
// AI
var aiRouter = require('./routes/ais');
// 질문 게시판
var questionRouter = require('./routes/questions');
// 지원서 작성
var applyRouter = require('./routes/apply');
//마이 페이지
var mypageRouter = require('./routes/mypages');

var authRouter = require('./routes/auth');

//db 및 json 테스트 용 코드
var dbtestRouter = require('./routes/dbtest');


var app = express();
sequelize.sync();
passportConfig(passport); // passport 모듈 추가


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(session({
  resave : false,
  saveUninitialized : false,
  secret : process.env.COOKIE_SECRET,
  cookie: {
      httpOnly: true,
      secure : false,
  },
}))

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(flash());
app.use(passport.initialize());// passport 모듈 추가
app.use(passport.session());// passport 모듈 추가

app.use('/', indexRouter);

app.use('/executive', executiveRouter);
app.use('/introduce', introduceRouter);
app.use('/rule', ruleRouter);
app.use('/meeting', meetingRouter);

app.use('/project', projectRouter);
app.use('/Web', webRouter);
app.use('/Mobile', mobileRouter);
app.use('/DataAnalysis', dataAnalysisRouter);
app.use('/AI', aiRouter);

app.use('/question', questionRouter);

app.use('/apply', applyRouter);
app.use('/auth', authRouter);
app.use('/mypage', mypageRouter);

//db 및 json 테스트 용 코드
app.use('/dbtest', dbtestRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;