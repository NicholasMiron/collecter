const express = require('express');
const db = require('../../db/db');
const fieldRoutes = require('./fieldRoutes');

const itemRoutes = require('./itemRoutes');

const router = express.Router();

router.get('/', (req, res) => {
  db.getAllCollections()
    .then((results) => {
      results = results.map(col => col.collection_name);
      res.send(results);
    })
    .catch(() => res.sendStatus(400));
});

router.get('/:name', (req, res) => {
  const colName = req.params.name;
  db.getCollectionByName(colName)
    // .then(res.send)
    .then((results) => {
      res.send(results);
    })
    .catch(error => res.send(error));
});

router.post('/:name', (req, res) => {
  db.addCollection(req.params.name)
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(400));
});

router.delete('/:name', (req, res) => {
  const collectionToRemove = req.params.name;
  db.removeCollection(collectionToRemove)
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(400));
});

router.patch('/', (req, res) => {
  const collectionToUpdate = req.body.oldName;
  const newCollectionName = req.body.newName;
  db.updateCollection(collectionToUpdate, newCollectionName)
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(400));
});


module.exports = router;
