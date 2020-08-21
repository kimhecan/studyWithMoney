const Sequelize = require('sequelize');
const comment = require('./comment');
const recomment = require('./recomment');
const image = require('./image');
const post = require('./post');
const user = require('./user');
const subject = require('./subject');
const report = require('./report');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.Comment = comment;
db.ReComment = recomment;
db.User = user;
db.Post = post;
db.Image = image;
db.Subject = subject;
db.Report = report;

Object.keys(db).forEach(modelName => {
  db[modelName].init(sequelize);
});


Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
