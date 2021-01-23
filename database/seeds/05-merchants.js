
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('merchants').del()
    .then(function () {
      // Inserts seed entries
      return knex('merchants').insert([
        {name: 'J&T Renewed Clothing', user_id: 1, location_id: 1, description: 'We curate some of the best vintage clothing from the tri-state area and beyond. We select the most classic and inovative garments.', img_url: 'https://i.postimg.cc/2yz4MNYK/cam-morin-kn-Km7u-7-Ihw-unsplash.jpg'}, // 1
        {name: "James' Records and Tapes", user_id: 2, location_id: 2, description: "Classic rock to modern Hip-Hop. It's a grab bag! Ask about our extensive private Jazz collection!", img_url: 'https://i.postimg.cc/pVZ7T2my/swaminathan-jayaraman-k-q-NI-QQk8-unsplash.jpg'}, // 2
        {name: "Lin's Tableware", user_id: 3, location_id: 2, description: 'Co-op run, home kilm ceramics. Handmade.', img_url: 'https://i.postimg.cc/NFdgtS9M/mae-mu-Gn-WKTJl-MYs-Q-unsplash.jpg'}, // 3
        {name: "Lauren's Cakes", user_id: 4, location_id: 3, description: 'Custom Cakes! If you can dream it, we can bake it!', img_url: 'https://i.postimg.cc/2yz4MNYK/cam-morin-kn-Km7u-7-Ihw-unsplash.jpg'} // 4
      ]);
    });
};
