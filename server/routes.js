const express = require('express');

const collectionRoutes = require('./Routes/collectionRoutes');
const fieldRoutes = require('./Routes/fieldRoutes');
const itemRoutes = require('./Routes/itemRoutes');

const router = express.Router();


router.use('/collections/fields', fieldRoutes);
router.use('/collections/items', itemRoutes);
router.use('/collections', collectionRoutes);


module.exports = router;
