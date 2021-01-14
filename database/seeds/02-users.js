
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'merchant1122', password: 'aa3gkx8', email: 'merchant01@gmail.com', role: 2}, // 1
        {username: 'merchant2', password: 'aa3gkx8', email: 'merchant02@gmail.com', role: 2}, // 2
        {username: 'merchant3', password: 'aa3gkx8', email: 'merchant03@gmail.com', role: 2}, // 3
        {username: 'merchant4', password: 'aa3gkx8', email: 'merchant04@gmail.com', role: 2}, // 4
        {username: 'merchant5', password: 'aa3gkx8', email: 'merchant05@gmail.com', role: 2}, // 5
        {username: 'merchant6', password: 'aa3gkx8', email: 'merchant06@gmail.com', role: 2}, // 6
      ]);
    });
};
