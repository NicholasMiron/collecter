const express = require('express');
const db = require('../../db/db');

const router = express.Router();


router.post('/', (req, res) => {
  const newCollectionName = req.body.name;
  db.addCollection(newCollectionName);
  res.end();
});

// Returns a list of collection names or the entirety of one collection
router.get('/', (req, res) => {
  db.getAllCollections()
    .then((results) => {
      if (req.query.name) {
        const colName = req.query.name;
        [results] = results.filter(col => col.collection_name === colName);
      } else {
        results = results.map(col => col.collection_name);
      }
      res.send(results);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.delete('/', (req, res) => {
  const collectionToRemove = req.body.name;
  db.removeCollection(collectionToRemove)
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(400));
});

router.patch('/', (req, res) => {
  const collectionToUpdate = req.body.oldName;
  const newCollectionName = req.body.newName;
  db.updateCollection(collectionToUpdate, newCollectionName)
    .then(() => { res.sendStatus(200); })
    .catch(() => { res.sendStatus(400); });
});


module.exports = router;
