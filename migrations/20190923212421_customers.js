
exports.up = function (knex) {
    return knex.schema.createTable('customers', customers => {
        customers.increments();

        customers
            .string('username', 128)
            .notNullable()
            .unique();

        customers
            .string('password', 128)
            .notNullable();

        customers
            .string('location', 128)
            .notNullable();

        customers
            .string('email_address', 128)
            .notNullable()
            .unique();

    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('customers');
};
