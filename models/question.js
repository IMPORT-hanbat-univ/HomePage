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
			modelName: 'Question',
			tableName: 'questions',
			paranoid: true,
			charset: 'utf8',
			collate: 'utf8_general_ci',
		});
	}
	static associate(db){
		db.Question.belongsTo(db.User, { foreginKey: 'writer_id', targetKey: 'id'});
	}

}