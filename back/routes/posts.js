const express = require('express');
const { Op } = require('sequelize');

const { Post, Image, User, Comment } = require('../models');

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
      order: [['createdAt', 'DESC']],
      include: [{
        model: User, // 게시글 작성자
        attributes: ['id', 'nickname', 'profileImg'],
      }, {
        model: Image, // 게시글의 이미지
      }, {
        model: Comment,
        include: [{
          model: User,
          attributes: ['id', 'nickname', 'profileImg'],
        }],
        order: [['createdAt', 'DESC']],
      }]
    });

    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;