const express = require('express');

const collectionRoutes = require('./Routes/collectionRoutes');
const fieldRoutes = require('./Routes/fieldRoutes');
const itemRoutes = require('./Routes/itemRoutes');

const router = express.Router();


router.use('/collections', collectionRoutes);
router.use('/fields', fieldRoutes);
router.use('/items', itemRoutes);


module.exports = router;
