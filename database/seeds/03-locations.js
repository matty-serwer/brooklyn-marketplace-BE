
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {name: 'Brooklyn Flea', neighborhood: 'Williamsburg', gmap_url: 'https://www.google.com/maps/place/Brooklyn+Flea/@40.7633002,-73.9976203,13z/data=!4m8!1m2!2m1!1sbrooklyn+flea!3m4!1s0x89c25ae603dd012b:0xc7df4f963707616e!8m2!3d40.719747!4d-73.961851', website_url: 'https://brooklynflea.com/'}, // 1
        {name: 'Brooklyn Flea', neighborhood: 'Dumbo', gmap_url: 'https://www.google.com/maps/place/Brooklyn+Flea/@40.7025879,-74.0227541,13z/data=!4m8!1m2!2m1!1sbrooklyn+flea!3m4!1s0x89c25a33c7b39d2f:0x6f1a69911ec197c2!8m2!3d40.7025879!4d-73.9877352', website_url: 'https://brooklynflea.com/'}, // 2
        {name: 'The Little Brooklyn Market', neighborhood: 'Williamsburg', gmap_url: 'https://www.google.com/maps/place/The+Little+Brooklyn+Market/@40.7166534,-73.9614362,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2595e03095ed5:0x21e5240b2e4f0ecc!8m2!3d40.7166534!4d-73.9592422', website_url: 'http://www.thelittlebrooklyn.com/'}, // 3
        {name: 'Bushwick Market', neighborhood: 'Bushwick', gmap_url: 'https://www.google.com/maps/place/Brooklyn+Pop-Up+Market/@40.7054405,-73.9235311,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25c1d76debd3f:0xa62dd3b3dcb85141!8m2!3d40.7054405!4d-73.9213371', website_url: 'https://bushwick-market.business.site/'}, // 4
        {name: 'Artists & Fleas', neighborhood: 'Williamsburg', gmap_url: 'https://www.google.com/maps/place/Artists+%26+Fleas+Williamsburg/@40.7036678,-74.0113128,12z/data=!4m8!1m2!2m1!1sartists+%26+fleas!3m4!1s0x89c25967a06fcc63:0xa15c7c34e760ff49!8m2!3d40.719896!4d-73.9612521', website_url: 'https://www.artistsandfleas.com/'}, // 5
        {name: 'P.S. 321 Flea Market', neighborhood: 'Williamsburg', gmap_url: 'https://www.google.com/maps/place/P.S.+321+Flea+Market/@40.671642,-73.9802226,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25b0147c4f239:0x5cb2a0920c72f8d9!8m2!3d40.671642!4d-73.9780286', website_url: 'https://ps321.org/'} // 6
      ]);
    });
};
