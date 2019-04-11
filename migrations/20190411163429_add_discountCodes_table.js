
exports.up = function(knex) {
  return knex.schema.createTable('discountCodes', function(tbl) {
      tbl.increments();
      tbl
        .string('code', 12)
        .notNullable()
        .unique('uq_code');
      tbl
        .string('title', 50)
        .notNullable();
      tbl
        .string('amount', 8)
        .notNullable();
      tbl
        .string('description', 250)
        .notNullable();
      tbl
        .string('applies to', 250);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('discountCodes');
};
