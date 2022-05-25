module.exports = (sequelize, DataTypes) => {
	return sequelize.define('projectpost',{
		project_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
        title: {
			type: DataTypes.STRING(20),
			allowNull: false,
		},
		content: {
			type: DataTypes.TEXT('medium'),
			allowNull: true,
		},
		previmg:{
			type: DataTypes.STRING(20),
			allowNull: false,
			defaultValue: "img-src",//이 부분은 default 이미지를 s3에 저장한 후에 띄워주면 될듯함
		},
		category :{
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		file:{
			type: DataTypes.STRING(100),
			allowNull: false,
		}
	},{
		timestamps: true,
        paranoid: true,
	});
};