const dbConfig = require("./db.config");
const mysql = require('mysql2/promise');
const Sequelize = require("sequelize");

const { HOST, PORT, USER, PASSWORD, DB, dialect, pool } = dbConfig;

// create db if it doesn't already exist
mysql.createConnection({ host: HOST, port: PORT, user: USER, password: PASSWORD }).then((connection) => {
    connection.query(`CREATE DATABASE IF NOT EXISTS ${DB};`);
});

const sequelize = new Sequelize(DB, USER, PASSWORD, {
    host: HOST,
    dialect: dialect,
    operatorsAliases: false,

    pool: {
      max: pool.max,
      min: pool.min,
      acquire: pool.acquire,
      idle: pool.idle,
    },
});

const db = {};
  
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.teams = require("../models/team.model")(sequelize, Sequelize);
db.projects = require("../models/project.model")(sequelize, Sequelize);
db.odysseyFoundationProjects = require("../models/odysseyFoundationProject.model")(sequelize, Sequelize);
db.technologies = require("../models/technology.model")(sequelize, Sequelize);
db.services = require("../models/service.model")(sequelize, Sequelize);
db.careerPortalLink = require("../models/careerPortalLink.model")(sequelize, Sequelize);
db.contact = require("../models/contact.model")(sequelize, Sequelize);
db.hideSection = require("../models/hideSection.model")(sequelize, Sequelize);
db.sectionIntroduction = require("../models/sectionIntroduction.model")(sequelize, Sequelize);

module.exports = db;