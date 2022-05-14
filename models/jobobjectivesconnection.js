module.exports = (sequelize, DataTypes) => {
	return sequelize.define('jobobjectivesconnection',{
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		Job_Objectives_Code: {
			type: DataTypes.INTEGER,
			allowNull: false,
		}
	},{
		timestamps: true,
        paranoid: true,
	});
};