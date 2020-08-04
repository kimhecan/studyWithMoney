const passport = require('passport');
const local = require('./local');
const { User } = require('../models');

module.exports = () => {
  passport.serializeUser((user, done) => { // 서버에 [{id:1, cookie: asb}] 저장시켜줌
    done(null, user.id)
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({ where: id });
      done(null, user); // req.user에 정보 넣어줌
    } catch (err) {
      console.error(err);
      done(err);
    }
  });

  local();
};

// 프론트에서 서버로는 cookie만 보낸다.
// 서버는 쿠키파서, 익스프레스 세션으로  쿠키 검사후 id: 1 발견
// id 1dl deserializeUser로 들어가서 req.user로 사용자 정보가 들어감

// 요청이 올때마다 deserializeUser가 실행 됨(db요청 1번씩 실행)
// 실무에서는 결과물 캐싱해서 사용