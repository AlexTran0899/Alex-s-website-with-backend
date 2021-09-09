exports.up = async (knex) => {
    await knex.schema
        .createTable('history', (history) => {
            history.integer('user_id')
                .references('user_id')
                .inTable('users')
                .onDelete('cascade')
                .onUpdate('cascade')
                .notNullable()
            history.integer('item_id')
                .references('item_id')
                .inTable('items')
                .onDelete('cascade')
                .onUpdate('cascade')
                .notNullable()
            history.timestamps(false, true)
            history.boolean('favourite')
        })
}
exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('history')
}
