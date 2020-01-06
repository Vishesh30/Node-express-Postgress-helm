"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "local";
// const env = process.env.NODE_ENV || "local";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

let sequelize;
console.log(process.env);
if (env != "local") {
  sequelize = new Sequelize(process.env.POSTGRES_HOST, config);
} else {
  try {
    sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config
    );
  } catch (error) {
    console.log(error);
  }
}
console.log("Sequelize = " + sequelize);
fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(file => {
    const model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

//Crete DB if not exists
sequelize
  .query("CREATE DATABASE `qty-converstion-dev`;")
  .then(data => {
    console.log("DB Created Successfully");
  })
  .catch(err => {
    console.log("Error While Creating DB " + err);
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
