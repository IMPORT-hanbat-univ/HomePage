module.exports = (sequelize, DataTypes) => {
	return sequelize.define('techstack',{
		Tech_Stack: {
			type: DataTypes.STRING(20),
			allowNull: false,
		},
	},{
		timestamps: true,
        paranoid: true,
	});
};