exports.seed = function (knex) {
  return knex('feedback').insert([
    { item_id: 1, user_id:1, stars: 5, comments: 'this works great' },
    { item_id: 2, user_id:2, stars: 2, comments: 'this works great' },
    { item_id: 3, user_id:3, stars: 1, comments: 'this works great' },
    { item_id: 1, user_id:4, stars: 3, comments: 'this works great' },
    { item_id: 1, user_id:5, stars: 3, comments: 'this works great' },
  ]);
};