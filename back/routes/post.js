const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { isLoggedIn } = require('./middleware');
const { Post, User, Image } = require('../models');

const router = express.Router();

try {
  fs.accessSync('imgs/post');
} catch {
  console.log('imgs/post 폴더가 없으므로 새로 생성합니다.');
  fs.mkdirSync('imgs/post');
}

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'imgs/post');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      const basename = path.basename(file.originalname, ext);
      done(null, basename + '_' + new Date().getTime() + ext);
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 }
});


router.post('/', isLoggedIn, upload.none(), async (req, res, next) => { //addPost
  try {
    console.log(req.body, 'addPost router에서 req.body');
    const post = await Post.create({
      content: req.body.content,
      category: req.body.category,
      UserId: req.user.id,
    });
    if (req.body.image) {
      if (Array.isArray(req.body.image)) {
        const images = await Promise.all(req.body.image.map((v) => Image.create({ src: v, PostId: post.id })));
        await post.addImages(images);
      } else {
        const image = await Image.create({ src: req.body.image });
        await post.addImages(image);
      }
    }
    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [{
        model: Image,
      }, {
        model: User,
        attributes: ['id', 'nickname', 'profileImg'],
      }]
    });

    res.status(201).json(fullPost);
  } catch (e) {
    console.error(e);
    next(e);
  }

});


router.post('/images', isLoggedIn, upload.array('image'), (req, res, next) => { // POST /post/images
  console.log(req.files);
  res.json(req.files.map((v) => v.filename));
});
module.exports = router;