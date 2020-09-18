module.exports = app => {
  const authors = require("../controllers/author.controller.js");

  var router = require("express").Router();

  // Retrieve all publishers
  router.get("/", authors.findAll);

  // Retrieve a single publisher with id
  router.get("/:id", authors.findOne);

  app.use('/api/authors', router);
};
