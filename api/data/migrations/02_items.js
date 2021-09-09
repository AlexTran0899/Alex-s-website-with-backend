exports.up = async (knex) => {
    await knex.schema
      .createTable('items', (items) => {
        items.increments('item_id')
        items.integer('user_id')
        .references('user_id')
        .inTable('users')
        .onDelete('cascade')
        .onUpdate('cascade')
        .notNullable()
        items.string('item_title', 200).notNullable()
        items.string('item_description', 1000).notNullable()
        items.integer('price', 200).notNullable()
        items.integer('catergory').notNullable()
        items.integer('quantity').defaultTo(1)
        items.integer('views').defaultTo(1)
      })
  }
  
  exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('items')
  }
  