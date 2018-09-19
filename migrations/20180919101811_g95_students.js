exports.up = function (knex, Promise) {
    return knex.schema.createTable('g95_students', (student) => {
      student.increments('id')
      student.string('first')
      student.string('last')
      student.string('lat')
      student.string('long')
      student.string('favAnimal')
      student.foreign('id').references('block_3.id')
    })
  }
  
  exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('g95_students')
  }