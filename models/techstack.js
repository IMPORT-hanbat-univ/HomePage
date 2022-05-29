const Sequelize = require('sequelize');

module.exports = class Web extends Sequelize.Model{
	static init(sequelize){
		return super.init({
			Tech_Stack: {
				type: Sequelize.STRING(20),
				allowNull: false,
			},
		},{
			sequelize,
			timestamps: true,
			underscored: false,
			modelName: 'TechStack',
			tableName: 'tackstacks',
			paranoid: true,
			charset: 'utf8',
			collate: 'utf8_general_ci',
		});
	}
	static associate(db){
		db.TechStack.belongsToMany(db.User,{ through: 'techstackconnection' });
	}
}