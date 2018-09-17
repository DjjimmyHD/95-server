const connection = require('./knexfile.js')[process.env.NODE_ENV || 'development']
const knex = require('knex')(connection)

getAllStudents = () => {
  return knex('students').select().orderBy('id', 'desc')
}

module.exports = {
  getAllStudents
}
