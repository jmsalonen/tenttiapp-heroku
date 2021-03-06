const express = require('express')
const router = express.Router()
const db = require('../db')

router.put('/courses/join/', (req, res) => {
  let text = `
    INSERT INTO appuser_course VALUES ($1, $2)
  `
  let values = [req.body.userid, req.body.courseid]
  try {
    db.query(text, values, (error, result) => {
      if (error) {
        throw error
      }
      text = `
        SELECT exam.id AS exam, appuser.id AS appuser, choice.id AS choice
        FROM appuser
        LEFT JOIN appuser_course ON appuser_course.id_appuser = appuser.id
        LEFT JOIN course_exam ON course_exam.id_course = appuser_course.id_course
        LEFT JOIN exam ON exam.id = course_exam.id_exam
        LEFT JOIN question ON question.id_exam = exam.id
        LEFT JOIN choice ON choice.id_question = question.id
        WHERE appuser.id = $1 AND appuser_course.id_course = $2
      `
      db.query(text, values, (error, result) => {
        if (error) {
          throw error
        }
        let newQuery = `
          INSERT INTO exam_appuser_choice (id_exam, id_appuser, id_choice, finished, answer) VALUES 
        ` 
        for (let i = 0; i < result.rows.length; ++i) {
          newQuery += `(${result.rows[i].exam}, ${result.rows[i].appuser}, ${result.rows[i].choice}, false, false)`
          if (i !== result.rows.length - 1)
            newQuery += ', '
        }
        newQuery += `
          ON CONFLICT (id_exam, id_appuser, id_choice) DO UPDATE
            SET finished = false,
                answer = false
        `
        db.query(newQuery, (error, result) => {
          if (error) {
            throw error
          }
          res.status(200).send(`joincourse`)
        })
      })
    })
  }
  catch (err) {
    res.send(err)
  }
})

router.put('/courses/leave/', (req, res) => {
  const text = `
    DELETE FROM appuser_course 
    WHERE id_appuser = $1 AND id_course = $2
  `
  const values = [req.body.userid, req.body.courseid]
  try {
    db.query(text, values, (error, result) => {
      if (error) {
        throw error
      }
      res.status(200).send(`leavecourse`)
    })
  }
  catch (err) {
    res.send(err)
  }
})

router.put('/courses/other/', (req, res) => {
  const text = `
    SELECT DISTINCT course.id, course.name
    FROM course
    LEFT JOIN appuser_course ON appuser_course.id_course = course.id
    WHERE course.id NOT IN (
      SELECT course.id
      FROM course
      LEFT JOIN appuser_course ON appuser_course.id_course = course.id
      WHERE appuser_course.id_appuser = $1)
  `
  const values = [req.body.id]
  try {
    db.query(text, values, (error, result) => {
      if (error) {
        throw error
      }
      res.send(result.rows)
    })
  }
  catch(err) {
    res.send(err)
  }
})

router.put('/get/choice', (req, res) => { // /get/choice/
  const text = `
    SELECT exam_appuser_choice.answer AS answer, choice.correct AS correct, choice.name AS name, question.id AS questionid, choice.id AS choiceid, exam_appuser_choice.finished AS finished
    FROM exam_appuser_choice
    LEFT JOIN choice ON choice.id = exam_appuser_choice.id_choice
    LEFT JOIN question ON question.id = choice.id_question
    WHERE exam_appuser_choice.id_appuser = $1 AND exam_appuser_choice.id_exam = $2
    ORDER BY choice.id
  `
  const values = [req.body.user, req.body.exam]
  try {
    db.query(text, values, (error, result) => {
      if (error) {
        throw error
      }
      res.send(result.rows)
    })
  }
  catch (err) {
    res.send(err)
  }
})

router.put('/update/answer/', (req, res) => {
  const text = `
    UPDATE exam_appuser_choice
    SET answer = $4
    WHERE id_exam = $1 AND id_appuser = $2 AND id_choice = $3
  `
  const values = [req.body.exam, req.body.user, req.body.choice, req.body.value]
  try {
    db.query(text, values, (error, result) => {
      if (error) {
        throw error
      }
      res.status(201).send(`Student answer changed`)
    }) 
  }
  catch (err) {
    res.send(err)
  }
})

router.put('/finished/', (req, res) => {
  const text = `
    UPDATE exam_appuser_choice 
    SET finished = true
    WHERE id_exam = $1 AND id_appuser = $2;  
  `
  const values = [req.body.exam, req.body.user]
  try {
    db.query(text, values, (error, result) => {
      if (error) {
        throw error
      }
      res.status(201).send(`Exam finished`)
    })
  }
  catch (err) {
    res.send(err)
  }
})

module.exports = router
