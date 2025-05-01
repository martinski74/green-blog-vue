const express = require('express');
const cors = require('cors');

const expressConfig = (app) => {
  app.use(cors());
  app.use(express.json());
};

module.exports = { expressConfig };
