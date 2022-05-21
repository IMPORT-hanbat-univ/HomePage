# Introduce

안녕하세요! 한밭대학교 IT 동아리 IMPORT입니다.

이 프로젝트는 동아리의 첫 활동인 동아리 홈페이지 프로젝트 입니다!

저희 동아리는 2021년도 10월 15일에 총동아리연합회로 부터 신규 동아리 승인을 받고 정식으로 활동하게 됐습니다.

현재는 웹 프로젝트 및 AI 프로젝트를 연계하고 있으며, 현재는 총동아리연합회로부터 동아리 홈페이지를 부탁을 받고 제작 중에 있습니다.

# Purpose

저희 동아리 웹페이지는 동아리 활동을 하면서 느끼는 불편한 점들을 웹 페이지로 기능 구현을 통해서 자동화를 하려고 제작되었습니다.

동아리 명단 관리, 회비 내역 관리, 프로젝트 인원 관리, IT 관련 소식에 대한 정보 공유, 질문 게시판 등등을 통해서 저희 동아리 소속 회원

들이 조금 더 편하게 정보를 습득하며, 운영진은 조금 더 편하게 인원을 관리하고, 프로젝트 팀장들도 마찬가지로 인원 관리, 프로젝트 관리를 할 수 있게

웹 사이트를 운영할 계획입니다.

# Current status

현재 저희 동아리 홈페이지는
기존에 사용했던 Framework와 라이브러리는
<span>
<img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white"/>
<img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/jQuery-0768AD?style=flat-square&logo=jQuery&logoColor=white"/>
<img src="https://img.shields.io/badge/Amazon AWS-232F3E?style=flat-square&logo=Amazon AWS&logoColor=white"/>
<img src="https://img.shields.io/badge/Amazon S3-569A31?style=flat-square&logo=MySQL&logoColor=white"/>
</span>


현 동아리 웹페이지는 아주 간단한 기능 구현인 글쓰기, GET, POST요청, AWS-S3이미지 업로드 등 간단한 기능 구현만을 진행했습니다.

현재는 React로 이주와 NodeJS에 있는 로그인 기능 구현, MongoDBAtlas 종료로 인해서 홈페이지는 닫아 놓은 상태입니다.


# Work in progress

현재 저희 동아리는 기존에 사용했던 

<img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white"/><span>
<img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/jQuery-0768AD?style=flat-square&logo=jQuery&logoColor=white"/>
<img src="https://img.shields.io/badge/Amazon AWS-232F3E?style=flat-square&logo=Amazon AWS&logoColor=white"/></span>

위의 스택에서
### Front

<span><img src="https://img.shields.io/badge/jQuery-0768AD?style=flat-square&logo=jQuery&logoColor=white"/>
 &nbsp; 에서  &nbsp; <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/></span>

### Back
<span><img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white"/>
&nbsp; 에서  &nbsp;
<img src="https://img.shields.io/badge/Sequelize-52B0E7?style=flat-square&logo=Sequelize&logoColor=white"/>
<img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white"/>
<img src="https://img.shields.io/badge/Passport-34E27A?style=flat-square&logo=Passport&logoColor=white"/></span>

으로 변경 완료 및 변경 중입니다.


## Front-End

- 현재 프론트 엔드는 React로 리펙토링을 하고 있으며, 기존에 write페이지를 구현 했던 부분을 다시 고치고 있습니다.
- 로그인 기능이 생기면서 필요하게 된, 마이페이지, 로그인 버튼, 읽기 등급제 등을 따로 구성하여 제작 중에 있습니다.
- 추가적으로 관리자 기능을 도입해서 운영진이 홈페이지에서 일어나는 일을 코드보다는 직관적으로 수행하기 위해서 관리자 페이지도 제작 중에 있습니다.

## Back-End

- 백엔드는 현재 Kakao로그인 구현이 완료 된 상태입니다.
- 기존 NoSQL이였던 MongoDB에서 sequelize를 이용해서 MySQL로 이주를 완료 하였습니다.
- 현재 프로젝트, 글작성, 로그인, 관리자 기능을 구현하기 위해서 데이터 테이블을 설계 하였으며, 이를 sequelize를 이용해서 테이블 설계 및 생성을 완료 했습니다.
- AWS RDS의 셋팅을 완료 했습니다.

# What to do next?

## Front-End

- 현재 저희 동아리 홈페이지 전체 페이지를 모두 리액트로 변환하는 일
- 로그인 기능, 마이페이지 구현, 관리자 페이지 구현
- url을 설계하는 일

## Back-End

- React와 NodeJS 간의 연동
- React에서 요구하는 데이터의 형태(Json)로 데이터 전송
- 개인 정보 암호화에 대한 코드 작성과 그에 대한 범위 설정

# 사용 법
저희 동아리 홈페이지에서 사용하시려면 Kakao Outh에서 client id값이 있어야지 구동 하실 수 있습니다.
그리고 저희 sequelize 셋팅 중에서 mysql 데이터베이스 이름은 importhompage로 설정을 하신 다음에
npm start
를 사용하시면 구동 하실 수 있습니다.

