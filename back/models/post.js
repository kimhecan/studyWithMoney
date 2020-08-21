const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Post extends Model {
  static init(sequelize) {
    return super.init({
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
    }, {
      modelName: 'Post',
      charset: 'utf8',
      collate: 'utf8_general_ci',
      sequelize,
    })
  }
  static associate(db) {
    db.Post.belongsTo(db.User); // posts에 userId 추가됨
    db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' }); // post.addLikers, post.removeLikers
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.Image);
    db.Post.belongsToMany(db.Report, { through: 'Post_Report', as: 'Reporter' });
  }
}