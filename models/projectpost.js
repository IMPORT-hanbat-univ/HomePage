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
		writer: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
        R_degree:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
	},{
		timestamps: true,
        paranoid: true,
	});
};