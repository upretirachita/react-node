const express = require ('express');
const {
  showStudents,
  showSingleStudent,
  addStudent,
  editStudent,
  deleteStudent,
} = require ('../controllers/presenters.controller');
const studentRouter = express.Router ();

studentRouter.get('/',(req, res) => res.send('Check /students route if there student.'))
studentRouter.get ('/presenters', showStudents);
studentRouter.get('/presenters/:id',showSingleStudent);
studentRouter.post('/presenters', addStudent);
studentRouter.put('/presenters/:id', editStudent);
studentRouter.delete('/presenters/:id', deleteStudent);


module.exports = studentRouter;

