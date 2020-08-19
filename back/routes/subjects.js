const router = require('express').Router();
const { Subjectsfunc } = require('../hangyang/subjects');
const { isLoggedIn } = require('./middleware');

router.get('/:collage/:department/:grade/:subject', isLoggedIn, async (req, res, next) => {
  try {
    const { collage, department, grade, subject } = req.params;
    const allSubject = await Subjectsfunc(collage, department, grade, subject)
    res.status(200).json(allSubject);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;