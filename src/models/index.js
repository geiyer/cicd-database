const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   dialect: 'postgres',
//   operatorsAliases: false
// });

const db_url = process.env.DATABASE_URL || 'postgres://postgres:Summer69@127.0.0.1:5432/bookstores-local';
const sequelize = new Sequelize(db_url);
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.publishers = require("./publisher.model.js")(sequelize, Sequelize);
db.authors = require("./author.model.js")(sequelize, Sequelize);

module.exports = db;