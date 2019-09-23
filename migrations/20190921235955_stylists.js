
exports.up = function (knex) {
    return knex.schema.createTable('stylists', stylists => {
        stylists.increments();

        stylists
            .string('username', 128)
            .notNullable()
            .unique();

        stylists.string('password', 128).notNullable();

    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('stylists');
};
