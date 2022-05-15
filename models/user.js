module.exports = (sequelize, DataTypes) => {
	return sequelize.define('user',{
        email:{
            type: DataTypes.STRING(20),
            allowNull: true,
            unique: true,
        },
		nick_name: {
			type: DataTypes.STRING(20),
			allowNull: false,
		},
        snsId:{
            type: DataTypes.STRING(30),
            allowNull: true,
        },
        gender:{
            type: DataTypes.STRING(10),
            allowNull: true,
        },
        age_range:{
            type: DataTypes.STRING(10),
            allowNull: true,
        },
		provider :{
			type: DataTypes.STRING(10),
			allowNull: true,
		},
		student_num: {
			type: DataTypes.STRING(100),
			allowNull: true,
		},
		department: {
			type: DataTypes.STRING(20),
			allowNull: true,
		},
        phone_number:{
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        degree:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        project_content:{
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        tech_stack_content:{
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        objectives_content:{
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        github_url:{
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        notion_url:{
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        blog_url:{
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        blog_url:{
            type: DataTypes.STRING(100),
            allowNull: true,
        }
	},{
		timestamps: true,
        paranoid: true,
	});
};