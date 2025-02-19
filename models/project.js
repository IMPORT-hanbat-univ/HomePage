const Sequelize = require('sequelize');

module.exports = class Web extends Sequelize.Model{
	static init(sequelize){
		return super.init({
            title: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            previmg:{
                type: Sequelize.STRING(20),
                allowNull: false,
                defaultValue: "img-src",//이 부분은 default 이미지를 s3에 저장한 후에 띄워주면 될듯함
            },
            end_date: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            Team_Leader:{
                type: Sequelize.STRING(20),
                allowNull: false,
            }
        },{
            sequelize,
			timestamps: true,
			underscored: false,
			modelName: 'Project',
			tableName: 'projects',
			paranoid: true,
			charset: 'utf8',
			collate: 'utf8_general_ci',
        });
    }
    static associate(db){
        db.Project.hasMany(db.Project, { foreginKey: 'project_post_num', sourceKey: 'id'});
        db.Project.belongsToMany(db.User,{ through: 'projectconnection' });
	}
}