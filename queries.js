const connection = require('./knexfile.js')[process.env.NODE_ENV || 'development']
const knex = require('knex')(connection)

getAllStudents = () => {
  return knex('g95_students').select().orderBy('id', 'desc')
}
getStudentById = (id) => {
  return knex('g95_students').where('id', id)
}
getStudentAndBlock = (id) => {
  return knex.from('block_3').where('g95_students.id', id).innerJoin('g95_students', 'block_3.id', 'g95_students.block_id')
}
createNewStudent = (studentInfo) => {
  return knex('g95_students').insert(studentInfo).returning('*')
}
updateStudentById = (student, id) => {
  return knex('g95_students').update(student, ['id', 'first', 'last']).where('id', id)
}
deleteStudentById = (id) => {
  return knex('g95_students').where('id', id).delete().returning('*')
}

module.exports = {
  getAllStudents,
  getStudentById,
  createNewStudent,
  updateStudentById,
  deleteStudentById,
  getStudentAndBlock

}
