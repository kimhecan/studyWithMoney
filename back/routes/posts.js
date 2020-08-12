const express = require('express');
const { Op } = require('sequelize');

const { Post, Image, User, Comment, ReComment } = require('../models');

const router = express.Router()

const findPostByWhere = async where => {
  const posts = await Post.findAll({
    where,
    limit: 7,
    include: [{
      model: User,
      attributes: ['id', 'nickname', 'profileImg'],
    }, {
      model: Image,
    }, {
      model: Comment,
      include: [{
        model: User,
        attributes: ['id', 'nickname', 'profileImg'],
      }, {
        model: ReComment,
        include: [{
          model: User,
          attributes: ['id', 'nickname', 'profileImg'],
        }]
      }],
    }, {
      model: User,
      as: 'Likers',
      attributes: ['id'],
    }],
    order: [
      ['createdAt', 'DESC'],
      [Comment, 'createdAt', 'DESC']
    ],
  });
  return posts;
}

router.get('/', async (req, res, next) => { // loadPosts
  try {
    let posts = [];
    if (req.query.category === 'all') {
      console.log('al받음');
      posts = posts.concat(await findPostByWhere({ category: 'freeBoard' }));
      console.log(posts.length);
      posts = posts.concat(await findPostByWhere({ category: 'infoBoard' }));
      console.log(posts.length);
      posts = posts.concat(await findPostByWhere({ category: 'clubBoard' }));
      console.log(posts.length);
    } else {
      let where = { category: req.query.category };
      if (parseInt(req.query.lastId, 10)) {
        where.id = { [Op.lt]: parseInt(req.query.lastId, 10) }
      }
      posts = posts.concat(await findPostByWhere(where));
    }

    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get('/main', async (req, res, next) => { // loadPosts
  try {
    const posts = await Post.findAll({
      limit: 5,
      order: ['createdAt', 'DESC'],
    });

    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;