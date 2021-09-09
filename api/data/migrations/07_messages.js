exports.up = async (knex) => {
    await knex.schema
        .createTable('messages', (messages) => {
            messages.integer('from')
                .references('user_id')
                .inTable('users')
                .onDelete('cascade')
                .onUpdate('cascade')
                .notNullable()
            messages.integer('to')
                .references('user_id')
                .inTable('users')
                .onDelete('cascade')
                .onUpdate('cascade')
                .notNullable()
            messages.string('text', 500).notNullable()
            messages.timestamps(false, true)

        })
}
exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('messages')
}
