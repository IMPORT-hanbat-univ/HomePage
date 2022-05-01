module.exports = (sequelize, DataTypes) => {
	return sequelize.define('ai',{
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
		id_name: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('now()'),
		},
        R_degree:{
            type: DataTypes.INTEGER,
            allowNull: false,
        }
	},{
		timestamps: false,
	});
};