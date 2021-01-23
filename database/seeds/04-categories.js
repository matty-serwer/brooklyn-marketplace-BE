
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {name: 'antiques'}, // 1
        {name: 'clothing'}, // 2
        {name: 'crafts'}, // 3
        {name: 'electrionics'}, // 4
        {name: 'furniture'}, // 5
        {name: 'groceries'}, // 6
        {name: 'housewares'}, // 7
        {name: 'prepared foods'}, // 8
        {name: 'records & other media'}, // 9 
        {name: 'other'} // 10
      ]);
    });
};
