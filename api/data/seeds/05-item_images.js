exports.seed = function (knex) {
  return knex('item_image').insert([
    { item_id: 1, image:'https://picsum.photos/200/300'},
    { item_id: 1, image:'https://picsum.photos/200/300'},
    { item_id: 2, image:'https://picsum.photos/200/300'},
    { item_id: 3, image:'https://picsum.photos/200/300'},
    { item_id: 4, image:'https://picsum.photos/200/300'},
    { item_id: 1, image:'https://picsum.photos/200/300'},
  ]);
};