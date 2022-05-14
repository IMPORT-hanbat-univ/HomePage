module.exports = (sequelize, DataTypes) => {
	return sequelize.define('projectconnection',{
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		Project_Code: {
			type: DataTypes.INTEGER,
			allowNull: false,
		}
	},{
		timestamps: true,
        paranoid: true,
	});
};