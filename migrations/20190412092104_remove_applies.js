
exports.up = function(knex) {
    return knex.schema.table('discountCodes', function(tbl) {
        tbl.dropColumn('applies to');
    })
  
};

exports.down = function(knex) {
  return knex.schema.table('discountCodes', function(tbl) {
      tbl.dropColumn('applies to', );
  })
};
