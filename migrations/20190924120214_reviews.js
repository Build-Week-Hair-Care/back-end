
exports.up = function (knex) {
    return knex.schema.createTable('reviews', reviews => {
        reviews.increments();

        reviews.integer('customer_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('customers')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        reviews.integer('stylist_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('stylists')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        reviews
            .string('review_text', 128)
            .notNullable()
            .unique();


        reviews
            .blob('photos', 128)
            .notNullable()
            .unique();


    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('reviews');
};
