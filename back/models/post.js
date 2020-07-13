module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci' //한글 저장//이모티콘저장
  });

  Post.associate = (db) => {
    db.Post.belongsTo(db.User); // posts에 userId 추가됨
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.Image);
  };
  return Post;
}