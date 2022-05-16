module.exports = (sequelize, DataTypes) => {
	return sequelize.define('project',{
        title: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
        end_date: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        Team_Leader:{
            type: DataTypes.STRING(20),
            allowNull: false,
        }

	},{
		timestamps: true,
        paranoid: true,
	});
};