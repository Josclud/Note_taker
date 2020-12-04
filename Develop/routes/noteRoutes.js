const router = require('express').Router()
const { join } = require('path')
const fs = require('fs')

router.get('/notes', (req, res) => {
  fs.readFile(join(__dirname, '..', 'db', 'db.json'), 'utf8', (err, data) => {
    if (err) { console.log(err) }

    let notes = JSON.parse(data)

    res.json(notes)
  })
})

router.post('/notes', (req, res) => {
  fs.readFile(join(__dirname, '..', 'db', 'db.json'), 'utf8', (err, data) => {
    if (err) { console.log(err) }

    let notes = JSON.parse(data)

    notes.push(req.body)

    fs.writeFile(join(__dirname, '..', 'db', 'db.json'), JSON.stringify(notes), err => {
      if (err) { console.log(err) }
      res.json(req.body)
    })

  })
})

router.delete('/notes/:id', (req, res) => {

})

module.exports = router
