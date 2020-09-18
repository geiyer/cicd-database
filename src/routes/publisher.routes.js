module.exports = app => {
  const publishers = require("../controllers/publisher.controller.js");

  var router = require("express").Router();

  // Retrieve all publishers
  router.get("/", publishers.findAll);

  // Retrieve a single publisher with id
  router.get("/:id", publishers.findOne);

  app.use('/api/publishers', router);
};
