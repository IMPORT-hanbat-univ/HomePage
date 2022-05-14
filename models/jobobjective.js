module.exports = (sequelize, DataTypes) => {
	return sequelize.define('jobobjective',{
		Job_Objectives: {
			type: DataTypes.STRING(20),
			allowNull: false,
		},
	},{
		timestamps: true,
        paranoid: true,
	});
};