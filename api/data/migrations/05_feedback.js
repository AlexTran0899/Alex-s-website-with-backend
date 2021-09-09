exports.up = async (knex) => {
    await knex.schema
      .createTable('feedback', (feedback) => {
        feedback.integer('item_id', 1000)
          .references('item_id')
          .inTable('items')
          .onDelete('cascade')
          .onUpdate('cascade')
          .notNullable()
          feedback.integer('user_id', 1000)
          .references('user_id')
          .inTable('users')
          .onDelete('cascade')
          .onUpdate('cascade')
          .notNullable()
          feedback.integer('stars', 200).notNullable()
          feedback.string('comments', 200).notNullable()
      })
  }
  exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('feedback')
  }
  