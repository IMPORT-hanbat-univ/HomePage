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
				defaultValue: "Web",
			},
			previmg:{
				type: Sequelize.STRING(20),
				allowNull: true,
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
		db.Web.belongsTo(db.User, { foreginKey: 'writer_id', targetKey: 'id'});
	}
}