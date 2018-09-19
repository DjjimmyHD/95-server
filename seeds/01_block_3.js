
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('block_3').del()
    .then(function () {
      // Inserts seed entries
      return knex('block_3').insert([
        {block_name: 'Full Stack Applications', curriculum: 'Node, Express, Knex, Postgres, FEFs'}
      ]);
    });
};
