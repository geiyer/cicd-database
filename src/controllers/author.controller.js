const db = require("../models");
const Author = db.authors;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

  Author.findAll({ where: condition })
    .then(data => {      
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving publishers."
      });
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Author.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(404).send({
          message: "Error retrieving publisher with id=" + id
        });
      });
  };