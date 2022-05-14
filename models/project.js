module.exports = (sequelize, DataTypes) => {
	return sequelize.define('project',{
		project_id: {
			type: DataTypes.INTEGER,
            defaultValue: DataTypes.UUIDV4,
			allowNull: false,
            primaryKey: true,
		},
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