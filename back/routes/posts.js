const express = require('express');
const { Op } = require('sequelize');

const { Post, Image, User } = require('../models');

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
        model: User,
        attributes: ['id', 'nickname', 'profileImg'],
      }, {
        model: Image,
      }]
    });

    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;