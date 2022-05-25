module.exports = (sequelize, DataTypes) => {
	return sequelize.define('web',{
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
			defaultValue: "Web",
		},
		previmg:{
			type: DataTypes.STRING(20),
			allowNull: true,
		},
		file:{
			type: DataTypes.STRING(100),
			allowNull: true,
		}
	},{
		timestamps: true,
        paranoid: true,
	});
};