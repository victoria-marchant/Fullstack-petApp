const express = require('express')
const router = express.Router()
const { multerUpload } = require('../middleware/multer')

const db = require('../db/db')

// GET /api/v1/puppies
router.get('/', (req, res) => {
  db.getPuppies()
    .then((items) => {
      res.json(items)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

// GET /api/v1/puppies/:id
router.get('/:id', (req, res) => {
  const { id } = req.params
  db.getPuppy(id)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

// POST /api/v1/puppies/
router.post('/', (req, res) => {
  const { name, owner, breed, animalType, imagePath } = req.body
  db.addPuppy({ name, owner, breed, animalType, imagePath })
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send('Server error')
    })
})

router.post('/add-upload', multerUpload.single('image'), (req, res) => {
  const animal = req.body
  const thisanimal = { ...animal, image: req.file.path.substring(13) }
  db.addPuppy(thisanimal)
    .then((newAnimal) => {
      res.json(newAnimal)
      return null
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

// PATCH /api/v1/puppies/:id
router.patch('/:id', (req, res) => {
  const updatedPuppy = req.body
  const id = req.params.id
  db.updatePuppy(id, updatedPuppy)
    .then(() => {
      return db.getPuppy(id)
    })
    .then((puppy) => res.json(puppy))
    .catch((err) => {
      console.error(err)
      res.status(500).send(`ohhh oooo can't update`)
    })
})

// DELETE /api/v1/puppies/:id
router.delete('/:id', (req, res) => {
  const id = req.params.id
  db.deletePuppy(id)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err) => {
      console.error(err.mesage)
      res.status(500).send('Server error')
    })
})

module.exports = router
