const { LoremIpsum } = require('lorem-ipsum');
exports.seed = function (knex) {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });
  return knex('items').insert([
    { user_id: 1, item_title: 'liquid culture', item_description: lorem.generateSentences(5), price: 2000,catergory: 1, views: 1},
    { user_id: 1, item_title: 'lions mane', item_description: lorem.generateSentences(5) , price: 3000, catergory: 1, views: 1},
    { user_id: 2, item_title: 'hello kitty pillow', item_description: lorem.generateSentences(5), price: 100000, catergory: 4 , views: 1},
    { user_id: 3, item_title: 'vintage cd', item_description: lorem.generateSentences(5), price: 1000,catergory: 2 , views: 1},
    { user_id: 4, item_title: 'home made honey', item_description: lorem.generateSentences(5), price: 900 ,catergory: 1  , views: 1},
    { user_id: 1, item_title: 'blue oyster', item_description: lorem.generateSentences(5),price: 2000 ,catergory: 1, views: 1 },
    { user_id: 1, item_title: 'pink oyster', item_description: lorem.generateSentences(5),price: 2000,catergory: 1 , views: 1 },
  ]);
};