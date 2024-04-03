var express = require('express');
const StudentModel = require('../models/StudentModel');
var router = express.Router();
//READ feature
//Importance: MUST use "async + await" keywords
router.get('/', async(req, res) => {
  //SQL: SELECT = Form student
  var studentList = await StudentModel.find({});
  console.log(studentList);
  res.render('index', {studentList});
})

module.exports = router;
