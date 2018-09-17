const connection = require('./knexfile.js')[process.env.NODE_ENV || 'development']
const knex = require('knex')(connection)

getAllStudents = () => {
  return knex('students').select().orderBy('id', 'desc')
}
getStudentById = (id) => {
  return knex('students').where('id', id)
}
createNewStudent = (studentInfo) => {
  return knex('students').insert(studentInfo).returning('*')
}

module.exports = {
  getAllStudents,
  getStudentById,
  createNewStudent
}
