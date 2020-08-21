const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Report extends Model {
  static init(sequelize) {
    return super.init({
      category: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      reporter: {
        type: DataTypes.STRING(30),
        allowNull: false,
      }
    }, {
      modelName: 'Report',
      charset: 'utf8',
      collate: 'utf8_general_ci',
      sequelize,
    })
  }
  static associate(db) {
    db.Report.belongsToMany(db.Post, { through: 'Post_Report', as: 'Reported' });
  }
}