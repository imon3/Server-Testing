
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('teams').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('teams').insert([
        { id: 1, name: 'San Franciso 49ers' },
        { id: 2, name: 'Los Angeles Lakers' },
        { id: 3, name: 'North Carolina Tar Heels' }
      ]);
    });
};
