const express = require('express');
const app = express();
const { configDatabase } = require('./config/databaseConfig');
const { expressConfig } = require('./config/express');
const { configRoutes } = require('./config/routes');
const { postRouter } = require('./controllers/posts');
const dotenv = require('dotenv');
dotenv.config();

expressConfig(app);
configDatabase(app);
configRoutes(app);
app.use('/posts', postRouter);
