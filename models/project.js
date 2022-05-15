module.exports = (sequelize, DataTypes) => {
	return sequelize.define('project',{
        title: {
			type: DataTypes.STRINT(50),
			allowNull: false,
		},
        end_date: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        Team_Leader:{
            type: DataTypes.STRINT(20),
            allowNull: false,
        }

	},{
		timestamps: true,
        paranoid: true,
	});
};