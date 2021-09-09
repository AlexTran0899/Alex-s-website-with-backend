exports.seed = function (knex) {
  return knex('orders').insert([
    { item_id: 1, user_id: 1, status: 1, quantity: 20, city: 'fayetteville', state: 'Ar', zip: '123 apple street', first_name: 'ben', last_name: 'dover', shipping_speed: 'priority mail'},
    { item_id: 2, user_id: 1, status: 2, quantity: 5, city: 'bolder', state: 'CO', zip: '123 maple street', first_name: 'kyle', last_name: 'lee', shipping_speed: 'priority mail'},
    { item_id: 3, user_id: 1, status: 3, quantity: 1, city: 'tampa', state: 'FL', zip: '123 roger street', first_name: 'alex', last_name: 'tran', shipping_speed: 'priority mail'},
  ]);
};
