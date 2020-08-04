const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const { isLoggedIn, isNotLoggedIn } = require('./middleware');
const { User, Post } = require('../models');

const router = express.Router();

const findById = async id => {
  const accountInfo = await User.findOne({ where: { userId: id } });
  return accountInfo;
}

const findByNickname = async nickname => {
  const accountInfo = await User.findOne({ where: { nickname: nickname } });
  return accountInfo;
}


router.post('/', isNotLoggedIn, async (req, res, next) => { // POST /user/ => 회원가입하기
  try {
    let accountInfo = await findById(req.body.userId);
    console.log(accountInfo, 'accountInfo');

    if (accountInfo) {
      return res.status(403).send('이미 존재하는 아이디 입니다.');
    }

    accountInfo = await findByNickname(req.body.nickname);

    if (accountInfo) {
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
      profileImg: 'default.png'
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


router.get('/', async (req, res, next) => { // loaduser
  try {
    if (req.user) {
      const userWithoutPassword = await User.findOne({
        where: { id: req.user.id },
        attributes: {
          exclude: ['password']
        },
        include: [{
          model: Post,
          attributes: ['id'],
        }]
      })
      res.status(200).json(userWithoutPassword);
    } else {
      res.status(401).json(null)
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
})

router.post('/logout', isLoggedIn, (req, res) => {  // POST /logout/ => 로그아웃하기
  console.log('dddddddd');
  req.logout();
  req.session.destroy();
  res.send('ok');
});

module.exports = router;
