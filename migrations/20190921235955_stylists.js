
exports.up = function (knex) {
    return knex.schema.createTable('stylists', stylists => {
        stylists.increments();

        stylists
            .string('username', 128)
            .notNullable()
            .unique();

        stylists
            .string('password', 128)
            .notNullable();

        stylists
            .string('email_address', 128)
            .notNullable()
            .unique();
        stylists
            .string('name', 128)
            .notNullable();

        stylists
            .string('bio', 128)
            .notNullable();

        stylists
            .string('location', 128)
            .notNullable();

        stylists
            .string('specialty', 128)
            .notNullable();


    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('stylists');
};
