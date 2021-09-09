exports.seed = function (knex) {
  return knex('history').insert([
    { item_id: 1, user_id:1},
    { item_id: 2, user_id:1},
    { item_id: 3, user_id:1},
    { item_id: 4, user_id:1},
  ]);
};