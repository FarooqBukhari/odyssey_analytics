var express = require('express');
var router = express.Router();
var db = require("../src/db");


const getTeamMembers = function(){
  return db.teams.findAll({ order: [['displayOrder', 'ASC']] });
};

const getProjects = function(){
  return db.projects.findAll({ order: [['displayOrder', 'ASC']] });
};

const getProducts = function(){
  return db.products.findAll({ order: [['displayOrder', 'ASC']] });
};

const getTechnologies = function(){
  return db.technologies.findAll({ order: [['displayOrder', 'ASC']] });
};

const getServices = function(){
  return db.services.findAll({ order: [['displayOrder', 'ASC']] });
};

/* GET home page. */
router.get('/', function (req, res, next) {
  var teamsPromise = getTeamMembers();
  var projectsPromise = getProjects();
  var productsPromise = getProducts();
  var technologiesPromise = getTechnologies();
  var servicesPromise = getServices();
  Promise.all([teamsPromise, projectsPromise, productsPromise, technologiesPromise, servicesPromise]).then((results) => {
    return res.render('index', {members: results[0], projects: results[1], products: results[2], technologies: results[3], services: results[4]});
  }).catch((err) => {
    return next(err);
  })
});

module.exports = router;
