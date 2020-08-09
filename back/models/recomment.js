const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class ReComment extends Model {
  static init(sequelize) {
    return super.init({
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      }
    }, {
      modelName: 'ReComment',
      charset: 'utf8',
      collate: 'utf8_general_ci',
      sequelize,
    })
  }
  static associate(db) {
    db.ReComment.belongsTo(db.Comment);
    db.ReComment.belongsTo(db.User);
  }
}