module.exports = (sequelize, DataTypes) => {
	return sequelize.define('question',{
		title: {
			type: DataTypes.STRING(20),
			allowNull: false,
		},
		content: {
			type: DataTypes.TEXT('medium'),
			allowNull: true,
		},
		id_name: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue : DataTypes.NOW,
		}
	},{
		timestamps: false,
	});
};