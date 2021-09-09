exports.up = async (knex) => {
    await knex.schema
      .createTable('item_image', (item) => {
          item.integer('item_id', 1000)
          .references('item_id')
          .inTable('items')
          .onDelete('cascade')
          .onUpdate('cascade')
          .notNullable()
          item.string('image',400).notNullable()
      })
  }
  
  exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('item_image')
  }
  