const Sequelize = require('sequelize');

module.exports = class Web extends Sequelize.Model{
	static init(sequelize){
		return super.init({
			Job_Objectives: {
				type: Sequelize.STRING(20),
				allowNull: false,
			},
		},{
			sequelize,
			timestamps: true,
			underscored: false,
			modelName: 'JobObj',
			tableName: 'jobobjectives',
			paranoid: true,
			charset: 'utf8',
			collate: 'utf8_general_ci',
		});
	}
	static associate(db){
		db.JobObj.belongsToMany(db.User,{ through: 'jobobjectivesconnection' });
	}
}