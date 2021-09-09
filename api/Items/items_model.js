const db = require('../data/db-config')

function add_item(item){
    return db('items').insert(item, ['*'])
}

function update_item(item){
    return db('items').where({item_id: item.item_id}).update(item, ['*'])
}

function get_all(){
    return db('items').select('user_id', 'item_id','item_title' ,'item_description', 'price' ).orderBy('views')
}
function get_all_by_catergory(catergory){
    return db('items').where({catergory}).select('user_id', 'item_id','item_title' ,'item_description', 'price' ).orderBy('views')
}

function get_by_user_id(user_id){
    return db('items').where({user_id})
}

async function get_single_item(item_id){
    const data = await db('items').where({item_id}).first()
    await db('items').where({item_id}).update({views: data.views + 1})
    return data
}
  module.exports = {
      add_item,
      update_item,
      get_all,
      get_by_user_id,
      get_all_by_catergory,
      get_single_item
  }
