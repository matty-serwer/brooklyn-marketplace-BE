
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {name: "Pull & Bear, Odd Future Donut Denim Jacket", price: 200, category_id: 2, user_id: 1, img_url: 'https://i.postimg.cc/wMDsq65V/benjamin-voros-Tn-No84-AJJ5-A-unsplash.jpg'}, // 1
        {name: "Women's Black Leather Jacket", price: "$250", category_id: 2, user_id: 1, img_url: 'https://i.postimg.cc/rF6PQQDX/lea-ochel-ns-RBb-E6-YLs-unsplash.jpg'}, // 2
        {name: "Vintage Coach Dressses", price: "$150", category_id: 2, user_id: 1}, // 3
        {name: "Classic Leather Boots", price: "$40 - $100", category_id: 2, user_id: 1}, // 4
        {name: "Vintage T's", price: "$20 - $50", category_id: 2, user_id: 1}, // 5
        {name: "70's Fur Coat", price: "$300", category_id: 2, user_id: 1}, // 5
        {name: "The Smiths - Louder Than Bombs", price: "$30", category_id: 9, user_id: 2, description: "Double LP", img_url: "https://i.postimg.cc/jdt9Bfwk/Louder-Than.jpg"}, // 6
        {name: "The Smiths - Strangeways Here We Come", price: "$30", category_id: 9, user_id: 2, description: "Vinyl LP", img_url: "https://i.postimg.cc/mD7X5Zbs/TSStrangeways.jpg"}, // 7
        {name: "The Cure - Kiss Me Kiss Me Kiss Me", price: "$40", category_id: 9, user_id: 2, description: "Double LP", img_url: "https://i.postimg.cc/PrMGqynj/kissme.jpg"}, // 8
        {name: "Depeche Mode - Black Celebration", price: "$35", category_id: 9, user_id: 2, description: "Vinyl LP", img_url: "https://i.postimg.cc/x1tS6R6R/Blck-Celebration.jpg"}, // 9
        {name: "The Beatles - The Beatles", price: "$25", category_id: 9, user_id: 2, description: "Double LP", img_url: "https://i.postimg.cc/d0bN6Zc6/White-Album.jpg"}, // 10
        {name: "Plate Set (4)", price: "$80", category_id: 7, user_id: 3}, // 11
        {name: "Bowl Set (4)", price: "$80", category_id: 7, user_id: 3}, // 12
        {name: "Centerpiece Vase", price: "$50", category_id: 7, user_id: 3}, // 13
        {name: "Coffee Mug", price: "$15", category_id: 7, user_id: 3}, // 14
        {name: "Planter Vase", price: "$60", category_id: 7, user_id: 3}, // 15
        {name: "Basic Chocolate Cake", price: "$30", category_id: 8, user_id: 4, description: "Square chocolate cake with dutch chocolate fudge. Serves 8-10"}, // 16
        {name: "Triple Layer Cake", price: "$40", category_id: 8, user_id: 4, description: "Chocolate, angelfood and velvet in a small form cake."}, // 17
        {name: "Six Layer Cake", price: "$60", category_id: 8, user_id: 4, description: "World famous six layer cake. Contains nuts and berries. Three flavors of fudge."}, // 18
        {name: "Three Stack Wedding Cake", price: "$300", category_id: 8, user_id: 4, description: "This price is our starting point for a three level wedding style cake. Can be made custom to order. Must be ordered a week in advance."}, // 19
      ]);
    });
};
