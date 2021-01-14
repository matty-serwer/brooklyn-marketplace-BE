
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {name: 'Brooklyn Flea', neighborhood: 'Williamsburg', gmap_url: 'https://www.google.com/maps/place/Brooklyn+Flea/@40.7633002,-73.9976203,13z/data=!4m8!1m2!2m1!1sbrooklyn+flea!3m4!1s0x89c25ae603dd012b:0xc7df4f963707616e!8m2!3d40.719747!4d-73.961851', website_url: 'https://brooklynflea.com/'},
        {name: 'Brooklyn Flea', neighborhood: 'Dumbo', gmap_url: 'https://www.google.com/maps/place/Brooklyn+Flea/@40.7025879,-74.0227541,13z/data=!4m8!1m2!2m1!1sbrooklyn+flea!3m4!1s0x89c25a33c7b39d2f:0x6f1a69911ec197c2!8m2!3d40.7025879!4d-73.9877352', website_url: 'https://brooklynflea.com/'},
        {name: 'The Little Brooklyn Market', neighborhood: 'Williamsburg', gmap_url: 'https://www.google.com/maps/place/The+Little+Brooklyn+Market/@40.7166534,-73.9614362,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2595e03095ed5:0x21e5240b2e4f0ecc!8m2!3d40.7166534!4d-73.9592422', website_url: 'http://www.thelittlebrooklyn.com/'},
      ]);
    });
};
