const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Subject extends Model {
  static init(sequelize) {
    return super.init({
      grade: { //학년
        type: DataTypes.INTEGER,
      },
      isuGbNm: { //이수구분(교양선택, 전공핵심..)
        type: DataTypes.STRING(20),
      },
      yungyukNm: { //영역이름(전공은 영역없음으로 적혀있음)
        type: DataTypes.STRING(30),
      },
      suupNo: { //수업번호
        type: DataTypes.INTEGER(10),
      },
      haksuNo: { //학수번호
        type: DataTypes.STRING(20),
      },
      gwamokNm: {//수업이름
        type: DataTypes.STRING(30),
      },
      gyogangsaNms: { //교강사
        type: DataTypes.STRING(40),
      },
      hakjeom: { // 학점
        type: DataTypes.INTEGER,
      },
      banSosokNm: { //단과대
        type: DataTypes.STRING(30),
      },
      suupTimes: { //시간
        type: DataTypes.STRING(40),
      },
      jehanInwon: {
        type: DataTypes.STRING(15),
      }
    }, {
      modelName: 'Subject',
      charset: 'utf8',
      collate: 'utf8_general_ci',
      sequelize,
    })
  }
  static associate(db) {
    db.Subject.belongsToMany(db.User, { through: 'Star', as: 'Starer' }); //get, add, remove 
  }
}
