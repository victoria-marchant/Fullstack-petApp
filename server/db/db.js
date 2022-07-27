const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getPuppies,
  getPuppy,
  addPuppy,
  updatePuppy,
  deletePuppy,
}

function getPuppies(db = connection) {
  return db('puppies').select()
}

function addPuppy(puppy, db = connection) {
  return db('puppies').insert(puppy)
}

function getPuppy(id, db = connection) {
  return db('puppies').select().where('id', id).first()
}

function updatePuppy(id, puppy, db = connection) {
  return db('puppies').update(puppy).where('id', id)
}

function deletePuppy(id, db = connection) {
  return db('puppies').delete().where('id', id)
}
