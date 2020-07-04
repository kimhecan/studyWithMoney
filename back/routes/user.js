const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const { isLoggedIn, isNotLoggedIn } = require('./middleware');
const { User, Post } = require('../models');

const router = express.Router();


router.post('/', isNotLoggedIn, async (req, res, next) => { // POST /user/ => 가입하기
  try {
    const overlapUserId = await User.findOne({ //아이디 중복확인
      where: {
        userId: req.body.userId
      }
    });
    if (overlapUserId) {
      return res.status(403).send('이미 존재하는 아이디 입니다.');
    }
    const overlapNickname = await User.findOne({ //아이디 중복확인
      where: {
        nickname: req.body.nickname
      }
    });
    if (overlapNickname) {
      return res.status(403).send('이미 존재하는 닉네임 입니다.');
    }
    const hasgedPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      userId: req.body.userId,
      password: hasgedPassword,
      nickname: req.body.nickname,
      email: req.body.email,
      grade: req.body.grade,
      department: req.body.department,
    });
    res.status(201).send('가입이 완료되었습니다!');
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.post('/login', isNotLoggedIn, (req, res, next) => { // POST /login/ => 로그인하기
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      const userWithoutPassword = await User.findOne({
        where: { id: user.id },
        attributes: {
          exclude: ['password']
        },
        include: [{
          model: Post,
          attributes: ['id'],
        }]
      })

      return res.status(200).json(userWithoutPassword);
    });
  })(req, res, next);
});

router.post('/logout', isLoggedIn, (req, res) => {  // POST /logout/ => 로그아웃하기
  req.logout();
  req.session.destroy();
  res.send('ok');
});

module.exports = router;
