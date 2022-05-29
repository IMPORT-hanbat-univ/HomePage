const Sequelize = require('sequelize');

module.exports = class Web extends Sequelize.Model{
	static init(sequelize){
		return super.init({
            email:{
                type: Sequelize.STRING(20),
                allowNull: true,
                unique: true,
            },
            nick_name: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            real_name:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            snsId:{
                type: Sequelize.STRING(30),
                allowNull: true,
            },
            gender:{
                type: Sequelize.STRING(10),
                allowNull: true,
            },
            age_range:{
                type: Sequelize.STRING(10),
                allowNull: true,
            },
            provider :{
                type: Sequelize.STRING(10),
                allowNull: true,
            },
            student_num: {
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            department: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            phone_number:{
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            degree:{
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            project_content:{
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            tech_stack_content:{
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            objectives_content:{
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            github_url:{
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            blog_url:{
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            blog_url:{
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            blog_url:{
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            mannager:{
                type: Sequelize.STRING(100),
                allowNull: true,
            }
        },{
            sequelize,
			timestamps: true,
			underscored: false,
			modelName: 'User',
			tableName: 'users',
			paranoid: true,
			charset: 'utf8',
			collate: 'utf8_general_ci',
        });
    }
    static associate(db){
        //1:N 관계
        db.User.hasMany(db.Web, { foreginKey: 'writer_id', sourceKey: 'id'});
        db.User.hasMany(db.Mobile, { foreginKey: 'writer_id', sourceKey: 'id'});
        db.User.hasMany(db.Data, { foreginKey: 'writer_id', sourceKey: 'id'});
        db.User.hasMany(db.Ai, { foreginKey: 'writer_id', sourceKey: 'id'});
        db.User.hasMany(db.Question, { foreginKey: 'writer_id', sourceKey: 'id'});

        //N:M 관계
        db.User.belongsToMany(db.JobObj,{ through: 'jobobjectivesconnection' });
        db.User.belongsToMany(db.TechStack,{ through: 'techstackconnection' });
        db.User.belongsToMany(db.Project,{ through: 'projectconnection' });
	}
}