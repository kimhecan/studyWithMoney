const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');
const { isLoggedIn } = require('./middleware');
const { Post, User, Image, Comment, ReComment, Report } = require('../models');


const router = express.Router();

try {
  fs.accessSync('imgs/post');
} catch {
  console.log('imgs/post 폴더가 없으므로 새로 생성합니다.');
  fs.mkdirSync('imgs/post');
}

AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: 'us-east-1',

})
const upload = multer({
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: 'studywithmoney-s3',
    key(req, file, cb) {
      cb(null, `original/${Date.now()}_${path.basename(file.originalname)}`)
    }
  }),
  limits: { fileSize: 20 * 1024 * 1024 } //20MB
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
        model: Image, // 게시물 이미지
      }, {
        model: User, // 게시글 작성자
        attributes: ['id', 'nickname', 'profileImg'],
      }, {
        model: Comment,
        include: [{
          model: User, // 게시물의 댓글 작성자
          attributes: ['id', 'nickname', 'profileImg'],
        },]
      }, {
        model: User, // 좋아요 누른 사람
        as: 'Likers',
        attributes: ['id'],
      }]
    });

    res.status(201).json(fullPost);
  } catch (e) {
    console.error(e);
    next(e);
  }

});


router.post('/images', isLoggedIn, upload.array('image'), (req, res, next) => { // POST /post/images
  console.log(req.files); //업로드된 이미지의 정보들
  res.json(req.files.map((v) => v.location.replace(/\/original\//, '/thumb/')));
});


router.delete('/:postId', isLoggedIn, async (req, res, next) => { // 포스트 삭제
  try {
    await Image.destroy({
      where: {
        PostId: parseInt(req.params.postId, 10),
      }
    });
    const comment = await Comment.findAll({ where: { PostId: parseInt(req.params.postId, 10), } });
    if (comment.length > 0) {
      comment.forEach(async (v) => {
        await ReComment.destroy({ where: { CommentId: parseInt(v.id, 10), } })
      })
      await Comment.destroy({ where: { PostId: parseInt(req.params.postId, 10), } });
    }

    await Post.destroy({
      where: {
        id: parseInt(req.params.postId, 10),
        UserId: req.user.id,
      },
    });


    res.status(200).json({ PostId: parseInt(req.params.postId, 10) })
  } catch (e) {
    console.error(e);
    next(e);
  }
});


router.put('/', isLoggedIn, async (req, res, next) => { // 포스트 업데이트
  try {

    // post 내용업데이트
    await Post.update({
      content: req.body.content,
    }, {
      where: { id: req.body.postId }
    });

    // update된 post 가져오기
    const post = await Post.findOne({
      where: { id: req.body.postId }
    });

    // 업데이트된 포스트와 연결된 이미지 지우기
    await Image.destroy({
      where: { PostId: req.body.postId }
    });

    //새로들어온 이미지가 있다면 Image 테이블어 넣어줌
    if (req.body.images) {
      if (Array.isArray(req.body.images)) {
        const images = await Promise.all(req.body.images.map((v) => Image.create({ src: v, PostId: req.postId })));
        await post.addImages(images);
      } else {
        const image = await Image.create({ src: req.body.images });
        await post.addImages(image);
      }
    }

    const updatePost = await Post.findOne({
      where: { id: req.body.postId },
      include: [{
        model: Image,
      }, {
        model: User,
        attributes: ['id', 'nickname', 'profileImg'],
      }]
    });
    return res.status(200).json(updatePost);
  } catch (e) {
    console.error(e);
    next(e);
  }
});


router.post('/:postId/comment', isLoggedIn, async (req, res, next) => { //comment 추가
  try {
    const post = await Post.findOne({
      where: { id: parseInt(req.params.postId, 10) },
    });
    if (!post) {
      return res.status(403).send('존재하지 않는 게시글입니다.');
    }
    const comment = await Comment.create({
      content: req.body.content,
      PostId: parseInt(req.params.postId, 10),
      UserId: req.user.id,
    })
    const fullComment = await Comment.findOne({
      where: { id: comment.id },
      include: [{
        model: ReComment,
        include: [{
          model: User,
          attributes: ['id', 'nickname', 'profileImg'],
        }]
      }, {
        model: User,
        attributes: ['id', 'nickname', 'profileImg'],
      }],
      order: [['createdAt', 'DESC'],
      [ReComment, 'createdAt', 'DESC'],
      ]
    })
    res.status(201).json(fullComment);
  } catch (e) {
    console.error(e);
    next(e);
  }
})

router.post('/recomment/:commentId', isLoggedIn, async (req, res, next) => { //recomment
  try {
    await ReComment.create({
      content: req.body.content,
      CommentId: parseInt(req.params.commentId),
      UserId: req.user.id,
    });
    const fullComment = await Comment.findOne({
      where: { id: parseInt(req.params.commentId, 10) },
      include: [{
        model: ReComment,
        include: [{
          model: User,
          attributes: ['id', 'nickname', 'profileImg'],
        }]
      }, {
        model: User,
        attributes: ['id', 'nickname', 'profileImg'],
      }],
      order: [
        ['createdAt', 'DESC'],
        [ReComment, 'createdAt', 'DESC'],
      ]
    })
    res.status(201).json(fullComment);
  } catch (e) {
    console.error(e);
    next(e);
  }
})

router.patch('/:postId/like', isLoggedIn, async (req, res, next) => { //좋아요
  try {
    const post = await Post.findOne({ where: { id: parseInt(req.params.postId) } });
    if (!post) return res.status(403).send('게시글이 존재하지 않습니다.');
    await post.addLikers(req.user.id);
    res.json({ PostId: post.id, UserId: req.user.id });
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.delete('/:postId/unlike', isLoggedIn, async (req, res, next) => { //좋아요취소
  try {
    const post = await Post.findOne({ where: { id: parseInt(req.params.postId, 10) } });
    if (!post) return res.status(403).send('게시글이 존재하지 않습니다.');
    await post.removeLikers(req.user.id);
    res.json({ PostId: post.id, UserId: req.user.id })
  } catch (e) {
    console.error(e);
    next(e);
  }
})

router.delete('/:postId/comment/:commentId', isLoggedIn, async (req, res, next) => { //댓글 삭제
  try {
    const comment = await Comment.findOne({
      where: {
        id: parseInt(req.params.commentId, 10),
        postId: parseInt(req.params.postId, 10),
      }
    });
    if (!comment) return res.status(403).send('댓글이 존재하지 않습니다.');

    await Comment.destroy({ where: { id: parseInt(req.params.commentId, 10) } })
    res.json({
      PostId: parseInt(req.params.postId, 10),
      CommentId: parseInt(req.params.commentId, 10),
      UserId: parseInt(req.user.id, 10),
    })
  } catch (e) {
    console.error(e);
    next(e);
  }
})

router.delete('/:postId/recomment/:reCommentId', isLoggedIn, async (req, res, next) => { //댓글 삭제
  try {
    const reComment = await ReComment.findOne({
      where: {
        id: parseInt(req.params.reCommentId, 10),
      }
    });
    if (!reComment) return res.status(403).send('대댓글이 존재하지 않습니다.');

    await ReComment.destroy({ where: { id: parseInt(req.params.reCommentId, 10) } })
    res.json({
      ReCommentId: parseInt(req.params.reCommentId, 10),
      CommentId: parseInt(reComment.CommentId, 10),
      UserId: parseInt(req.user.id, 10),
      PostId: parseInt(req.params.postId, 10),
    })
  } catch (e) {
    console.error(e);
    next(e);
  }
})

router.post('/report', isLoggedIn, async (req, res, next) => { //report
  try {
    const report = await Report.create({
      category: req.body.values.radio,
      content: req.body.values.content,
      reporter: req.user.id,
    });
    console.log(report);
    await report.addReported(req.body.post.id);

    res.status(201).send('신고접수가 완료되었습니다.')
  } catch (e) {
    console.error(e);
    next(e);
  }
})

module.exports = router;