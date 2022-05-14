module.exports = (sequelize, DataTypes) => {
	return sequelize.define('techstackconnection',{
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		Tech_Stack_Code: {
			type: DataTypes.INTEGER,
			allowNull: false,
		}
	},{
		timestamps: true,
        paranoid: true,
	});
};