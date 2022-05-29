const Sequelize = require('sequelize');

module.exports = class Web extends Sequelize.Model{
	static init(sequelize){
		return super.init({
			project_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			title: {
				type: Sequelize.STRING(20),
				allowNull: false,
			},
			content: {
				type: Sequelize.TEXT('medium'),
				allowNull: true,
			},
			previmg:{
				type: Sequelize.STRING(20),
				allowNull: false,
				defaultValue: "img-src",//이 부분은 default 이미지를 s3에 저장한 후에 띄워주면 될듯함
			},
			category :{
				type: Sequelize.STRING(100),
				allowNull: false,
			},
			file:{
				type: Sequelize.STRING(100),
				allowNull: false,
			}
		},{
			sequelize,
				timestamps: true,
				underscored: false,
				modelName: 'ProjectPost',
				tableName: 'projectposts',
				paranoid: true,
				charset: 'utf8',
				collate: 'utf8_general_ci',
		});
	}
	static associate(db){
		db.ProjectPost.belongsTo(db.User, { foreginKey: 'project_post_num', targetKey: 'id'});
	}
}