exports.up = async (knex) => {
    await knex.schema
      .createTable('item_option', (item) => {
          item.integer('item_id', 1000)
          .references('item_id')
          .inTable('items')
          .onDelete('cascade')
          .onUpdate('cascade')
          .notNullable()
          item.string('option_name', 200).notNullable()
          item.integer('option_price', 200).notNullable()
      })
  }
  
  exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('item_option')
  }
  