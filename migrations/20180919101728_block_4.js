
exports.up = function(knex, Promise) {
    return knex.schema.createTable('block_4', (block) => {
        block.increments('block_id')
        block.string('block_name')
        block.string('curriculum')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('block_4')
  };