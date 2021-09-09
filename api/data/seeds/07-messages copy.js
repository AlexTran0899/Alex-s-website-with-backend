exports.seed = function (knex) {
  return knex('messages').insert([
    { from: 1, to:2, text: 'how do i use this thing' },
    { from: 2, to:1, text: 'just google it' },
    { from: 2, to:1, text: 'but how do i buy the liquid?' },
    { from: 1, to:2, text: 'go to my store' },
    { from: 2, to:1, text: 'i am lost' },

  ]);
};