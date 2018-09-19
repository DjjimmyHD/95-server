
exports.up = function(knex, Promise) {
  return knex.schema.createTable('block_3', (block) => {
      block.increments('id')
      block.string('name')
      block.string('curriculum')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('block_3')
};
