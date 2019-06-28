const express = require('express');

const db = require('../db/db');
// const collectionRoutes = require('./Routes/collectionRoutes');
// const fieldRoutes = require('./Routes/fieldRoutes');
// const itemRoutes = require('./Routes/itemRoutes');

const router = express.Router();


// router.use('/collections/fields', fieldRoutes);
// router.use('/collections/items', itemRoutes);
// router.use('/collections', collectionRoutes);


// Collections
router.get('/collections', (req, res) => {
  db.getAllCollections()
    .then((results) => {
      res.send(results);
    })
    .catch(() => res.sendStatus(400));
});

router.get('/collections/:name', (req, res) => {
  const colName = req.params.name;

  db.getCollectionByName(colName)
    .then((results) => {
      res.send(results);
    })
    .catch(error => res.send(error));
});

router.post('/collections/', (req, res) => {
  db.addCollection(req.body.name)
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(400));
});

router.delete('/collections/', (req, res) => {
  const collectionToRemove = req.body.name;

  db.removeCollection(collectionToRemove)
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(400));
});

router.patch('/collections/', (req, res) => {
  const collectionToUpdate = req.body.oldName;
  const newCollectionName = req.body.newName;

  db.updateCollection(collectionToUpdate, newCollectionName)
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(400));
});


// Fields
router.post('/collections/:name/fields', (req, res) => {
  const { field } = req.body;
  const collection = req.params.name;

  db.addField(collection, field)
    .then(() => {
      res.sendStatus(201);
    })
    .catch(() => {
      res.sendStatus(400);
    });
});

router.delete('/collections/:name/fields', (req, res) => {
  const collection = req.params.name;
  const { fieldID } = req.body;

  db.removeField(collection, fieldID)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(400);
    });
});

router.patch('/collections/:name/fields', (req, res) => {
  const collection = req.params.name;
  const { fieldID, newField } = req.body;

  db.updateField(collection, fieldID, newField)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(400);
    });
});


// Items
router.post('/collections/:name/items', (req, res) => {
  const collection = req.params.name;
  const { item } = req.body;

  db.addItem(collection, item)
    .then(() => {
      res.sendStatus(201);
    })
    .catch(() => {
      res.sendStatus(400);
    });
});

router.delete('/collections/:name/items', (req, res) => {
  const collection = req.params.name;
  const { itemID } = req.body;

  db.removeItem(collection, itemID)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(400);
    });
});

router.patch('/collections/:name/items', (req, res) => {
  const collection = req.params.name;
  const { item } = req.body;

  db.updateItem(collection, item._id, item)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(400);
    });
});


module.exports = router;
