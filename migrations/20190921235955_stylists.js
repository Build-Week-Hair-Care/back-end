
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
            .string('Name', 128)
            .notNullable();

        stylists
            .string('Bio', 128)
            .notNullable();

        stylists
            .string('Location', 128)
            .notNullable();

        stylists
            .string('Specialty', 128)
            .notNullable();

    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('stylists');
};
