const express = require('express');
const db = require('../../db/db');

const router = express.Router();


router.post('/fields', (req, res) => {
  const { collection, field } = req.body;
  db.addField(collection, field)
    .then(() => {
      res.sendStatus(201);
    })
    .catch(() => {
      res.sendStatus(400);
    });
});

router.delete('/fields', (req, res) => {
  const { collection, field } = req.body;

  db.removeField(collection, field)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(400);
    });
});

router.patch('/fields', (req, res) => {
  const { collection, oldField, newField } = req.body;

  db.updateField(collection, oldField, newField)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(400);
    });
});


module.exports = router;
