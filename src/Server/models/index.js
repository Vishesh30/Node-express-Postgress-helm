"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
// const env = process.env.NODE_ENV || "local";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

let sequelize;
console.log(process.env);
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env.POSTGRES_HOST, config);
  // sequelize = new Sequelize(
  //   process.env.POSTGRES_HOST,
  //   process.env.POSTGRES_USER,
  //   process.env.POSTGRES_PASSWORD,
  //   config
  // );
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

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
