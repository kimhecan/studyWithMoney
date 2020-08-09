const express = require('express');
const { Op } = require('sequelize');

const { Post, Image, User, Comment, ReComment } = require('../models');

const router = express.Router()

router.get('/', async (req, res, next) => { // loadPosts
  try {
    const where = { category: req.query.category };
    if (parseInt(req.query.lastId, 10)) {
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) }
    }
    const posts = await Post.findAll({
      where,
      limit: 10,
      include: [{
        model: User, // 게시글 작성자
        attributes: ['id', 'nickname', 'profileImg'],
      }, {
        model: Image, // 게시글의 이미지
      }, {
        model: Comment, // 게시글의 댓글
        include: [{
          model: User, //댓글을 쓴 사람
          attributes: ['id', 'nickname', 'profileImg'],
        }, {
          model: ReComment,
          include: [{
            model: User, //대댓글을 쓴 사람
            attributes: ['id', 'nickname', 'profileImg'],
          }]
        }],
      }, {
        model: User, // 좋아요 누른 사람
        as: 'Likers',
        attributes: ['id'],
      }],
      order: [
        ['createdAt', 'DESC'],
        [Comment, 'createdAt', 'DESC']
      ],
    });

    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;