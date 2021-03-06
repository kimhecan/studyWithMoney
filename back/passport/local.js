const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const bcrypt = require('bcrypt');
const { User } = require('../models');

module.exports = () => {
  passport.use(new LocalStrategy({
    usernameField: 'userId', //아이디 front에서 data 보낼때 key
    passwordField: 'password',
  }, async (userId, password, done) => {
    try {
      const user = await User.findOne({
        where: { userId }
      });
      if (!user) {
        //서버에러, 성공, 클라이언트에러
        return done(null, false, { reason: '가입하지 않은 아이디이거나, 잘못된 비밀번호 입니다.' });
      }
      const result = await bcrypt.compare(password, user.password);
      if (result) {
        return done(null, user);
      }
      return done(null, false, { reason: '비밀번호가 틀렸습니다.' });
    } catch (e) {
      console.error(e);
      return done(e);
    }
  }));
};