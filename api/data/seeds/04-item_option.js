exports.seed = function (knex) {
  return knex('item_option').insert([
    { item_id: 1, option_name: 'lions mane',option_price: 2000 },
    { item_id: 1, option_name: 'blue oyster',option_price: 2000 },
    { item_id: 1, option_name: 'pink oyster',option_price: 2000 },
    { item_id: 1, option_name: 'cordyceps',option_price: 2000 },
    { item_id: 1, option_name: 'king oyster',option_price: 2000 },
  ]);
};