const express = require('express');
const db = require('../../db/db');

const router = express.Router();

router.post('/', (req, res) => {
  const { item, collection } = req.body;

  db.addItem(collection, item)
    .then(() => {
      res.sendStatus(201);
    })
    .catch(() => {
      res.sendStatus(400);
    });
});

router.delete('/', (req, res) => {
  const { collection, id } = req.body;

  db.removeItem(collection, id)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(400);
    });
});

router.patch('/', (req, res) => {
  const { collection, item } = req.body;

  db.updateItem(collection, item._id, item)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(400);
    });
});


module.exports = router;
