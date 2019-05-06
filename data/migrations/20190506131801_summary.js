
exports.up = function(knex, Promise) {
  return knex.schema.createTable('summary', table => {
    table.increments()
    table.string('issue')
    table.text('summary')
    table.string('writer')
    table.string('penciller')
    table.string('inker')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('summary')
};
