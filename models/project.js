module.exports = (sequelize, DataTypes) => {
	return sequelize.define('project',{
        title: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
        previmg:{
			type: DataTypes.STRING(20),
			allowNull: false,
			defaultValue: "img-src",//이 부분은 default 이미지를 s3에 저장한 후에 띄워주면 될듯함
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