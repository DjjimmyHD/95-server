
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('block_4').del()
    .then(function () {
      // Inserts seed entries
      return knex('block_4').insert([
        {block_name: 'Real World and Capstones', curriculum: 'Arrays & Linked Lists, Stacks & Queues, Sorting Algorithms, Interviews, CAPSTONES'}
      ]);
    });
};
