const { postRouter } = require('../controllers/posts');

const configRoutes = (app) => {
  app.use(postRouter);
  // Add more routes here as needed
};

module.exports = { configRoutes };
