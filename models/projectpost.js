module.exports = (sequelize, DataTypes) => {
	return sequelize.define('projectpost',{
		project_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
        title: {
			type: DataTypes.STRING(20),
			allowNull: false,
		},
		content: {
			type: DataTypes.TEXT('medium'),
			allowNull: true,
		},
		category :{
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		file:{
			type: DataTypes.STRING(100),
			allowNull: false,
		}
	},{
		timestamps: true,
        paranoid: true,
	});
};