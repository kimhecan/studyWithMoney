const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const passport = require('passport');
const path = require('path');
const passportConfig = require('./passport');
const db = require('./models');

const userRouter = require('./routes/user');
const postRouter = require('./routes/post')
const postsRouter = require('./routes/posts')

const app = express();
dotenv.config();
db.sequelize.sync()
  .then(() => {
    console.log('db 연결 성공')
  })
  .catch(console.error);
passportConfig();


app.use(morgan('dev'));
app.use(cors({
  origin: 'http://localhost:3000',
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

app.use('/user', userRouter);
app.use('/post', postRouter);
app.use('/posts', postsRouter);


app.listen(3065, () => {
  console.log('서버 구동중');
});