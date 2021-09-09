exports.up = async (knex) => {
    await knex.schema
        .createTable('orders', (order) => {
            order.integer('user_id')
                .references('user_id')
                .inTable('users')
                .onDelete('cascade')
                .onUpdate('cascade')
                .notNullable()
            order.integer('item_id')
                .references('item_id')
                .inTable('items')
                .onDelete('cascade')
                .onUpdate('cascade')
                .notNullable()
            order.timestamps(false, true)
            order.integer('quantity', 100)
            order.string('city')
            order.string('state')
            order.string('zip')
            order.string('address')
            order.string('first_name')
            order.string('last_name')
            order.string('shipping_speed')
            order.integer('status')
        })
}
exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('orders')
}
