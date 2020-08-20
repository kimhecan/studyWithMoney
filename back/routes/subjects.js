const router = require('express').Router();
const { Subjectsfunc } = require('../hangyang/subjects');
const { isLoggedIn } = require('./middleware');
const { Subject, User } = require('../models');

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

router.post('/mysubject', isLoggedIn, async (req, res, next) => {
  try {
    const subjectList = await Subject.findOrCreate({
      where: { suupNo: req.body.subject.suupNo },
      defaults: {
        grade: req.body.subject.grade,
        banSosokNm: req.body.subject.banSosokNm,
        isuGbNm: req.body.subject.isuGbNm,
        yungyukNm: req.body.subject.yungyukNm,
        haksuNo: req.body.subject.haksuNo,
        gwamokNm: req.body.subject.gwamokNm,
        gyogangsaNms: req.body.subject.gyogangsaNms,
        suupTimes: req.body.subject.suupTimes,
        hakjeom: req.body.subject.hakjeom,
        jehanInwon: req.body.subject.jehanInwon,
      }
    });
    await subjectList[0].addStarer(req.user.id);
    res.status(201).json({ subject: subjectList[0] });
  } catch (error) {
    console.error(error);
    next(error);
  }
});


router.get('/mysubject', isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: { id: req.user.id },
      include: {
        model: Subject,
        as: 'Stared',
      }
    });
    const subjects = user.Stared;
    res.status(201).json({ subjects });
  } catch (error) {
    console.error(error);
    next(error);
  }
})

router.delete('/mysubject/:suupNo', isLoggedIn, async (req, res, next) => {
  try {
    const subject = await Subject.findOne({ where: { suupNo: req.params.suupNo } });
    if (subject) {
      await subject.removeStarer(req.user.id);
    }
    res.status(201).json({ suupNo: subject.suupNo });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;