const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require('../db/db');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json({ extended: true }));

app.use(express.static('dist'));

// Collection Routes
app.post('/api/collections', (req, res) => {
  const newCollectionName = req.body.name;
  db.addCollection(newCollectionName);
  res.end();
});

// Returns a list of collection names or the entirety of one collection
app.get('/api/collections', (req, res) => {
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


app.delete('/api/collections', (req, res) => {
  const collectionToRemove = req.body.name;
  db.removeCollection(collectionToRemove)
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(400));
});

app.patch('/api/collections', (req, res) => {
  const collectionToUpdate = req.body.oldName;
  const newCollectionName = req.body.newName;
  db.updateCollection(collectionToUpdate, newCollectionName)
    .then(() => { res.sendStatus(200); })
    .catch(() => { res.sendStatus(400); });
});


// Field Routes
app.post('/api/collections/fields', (req, res) => {
  const { collection, field } = req.body;
  db.addField(collection, field)
    .then(() => {
      res.sendStatus(201);
    })
    .catch(() => {
      res.sendStatus(400);
    });
});

app.delete('/api/collections/fields', (req, res) => {
  const { collection, field } = req.body;

  db.removeField(collection, field)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(400);
    });
});

app.patch('/api/collections/fields', (req, res) => {
  const { collection, oldField, newField } = req.body;

  db.updateField(collection, oldField, newField)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(400);
    });
});


// Item Routes
app.post('/api/collections/items', (req, res) => {
  const { collection, item } = req.body;

  db.addItem(collection, item)
    .then(() => {
      res.sendStatus(201);
    })
    .catch(() => {
      res.sendStatus(400);
    });
});

app.delete('/api/collections/items', (req, res) => {
  const { collection, id } = req.body;

  db.removeItem(collection, id)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(400);
    });
});

app.patch('/api/collections/items', (req, res) => {
  const { collection, item } = req.body;

  db.updateItem(collection, item._id, item)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(400);
    });
});


module.exports = app;
