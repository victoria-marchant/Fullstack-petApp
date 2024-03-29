exports.up = function (knex) {
  return knex.schema.createTable('puppies', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.string('owner')
    table.string('animalType')
    table.string('breed')
    table.text('imagePath')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('puppies')
}
