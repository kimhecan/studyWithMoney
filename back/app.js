const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const passport = require('passport');
const hpp = require('hpp');
const helmet = require('helmet');
const path = require('path');
const db = require('./models');
const passportConfig = require('./passport');

const initExpress = () => {
  const app = express();
  const PORT = 80;

  if (process.env.NODE_ENV === 'production') {
    app.use(morgan('combined'));
    app.use(hpp());
    app.use(helmet());
  } else {
    app.use(morgan('dev'));
  }

  app.use(cors({
    origin: ['http://localhost:3000', 'studyWithMoney.com', 'http://13.125.224.241'],
    credentials: true,
  }));

  app.use('/', express.static(path.join(__dirname, 'imgs')));
  app.use(express.json());
  app.use(express.urlencoded({ limit: '50mb', extended: true }));
  app.use(cookieParser(process.env.COOKIE_SECRET));
  app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  app.get('/', (req, res) => {
    res.send('hello express');
  });

  app.use('/user', require('./routes/user'));
  app.use('/post', require('./routes/post'));
  app.use('/posts', require('./routes/posts'));

  app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
  })
}

const initMysql = async () => {
  try {
    await db.sequelize.sync()
    console.log('db 연결 성공');
  } catch (e) {
    console.error(e);
  }
};

const main = () => {
  initMysql().then(() => {
    dotenv.config();
    passportConfig();
    initExpress();
  });
};

main();
