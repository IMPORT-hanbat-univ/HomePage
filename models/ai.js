const Sequelize = require('sequelize');

module.exports = class Web extends Sequelize.Model{
	static init(sequelize){
		return super.init({
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
				defaultValue: "AI"
			},
			file:{
				type: Sequelize.STRING(100),
				allowNull: true,
			}
		},{
			sequelize,
			timestamps: true,
			underscored: false,
			modelName: 'Web',
			tableName: 'webs',
			paranoid: true,
			charset: 'utf8',
			collate: 'utf8_general_ci',
		});
	}
	static associate(db){
		db.Ai.belongsTo(db.User, { foreginKey: 'writer_id', targetKey: 'id'});
	}
};