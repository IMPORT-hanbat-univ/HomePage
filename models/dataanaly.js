module.exports = (sequelize, DataTypes) => {
	return sequelize.define('dataanalies',{
		title: {
			type: DataTypes.STRING(20),
			allowNull: false,
		},
		content: {
			type: DataTypes.TEXT('medium'),
			allowNull: true,
		},
		previmg:{
			type: DataTypes.STRING(20),
			allowNull: false,
			defaultValue: "img-src",
		},
		category :{
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: "DataAnalysis",
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