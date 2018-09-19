
exports.up = function (knex, Promise) {
    return knex.schema.createTable('g90_students', (table) => {
      table.increments()
      table.string('firstName')
      table.string('lastName')
      table.string('photo')
      table.string('hometownLat')
      table.string('hometownLong')
      table.string('prevOccupation')
      table.integer('block_id').references('block_4.id')
    })
  }
  
  exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('g90_students')
  }
