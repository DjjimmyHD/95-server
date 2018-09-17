const express = require('express')
const app = express()
const port = process.env.PORT || 5555
const queries = require('./queries')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res, next) => {
  queries.getAllStudents().then(studentsInfo => res.json({data: studentsInfo}))
})
app.get('/:id', (req, res, next) => {
  queries.getStudentById(req.params.id).then(student => res.json({data: student}))
})
app.post('/', (req, res, next) => {
  queries.createNewStudent(req.body).then(responseData => res.json({data: responseData}))
})
app.put('/:id', (req, res, next) => {
  queries.updateStudentById(req.body, req.params.id).then(updatedStudent => res.json({data: updatedStudent}))
})

app.listen(port, () => {
  console.log(`I got you on ${port}`)
})
