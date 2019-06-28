const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json({ extended: true }));

app.use(express.static('dist'));

app.use('/api', routes);

module.exports = app;
