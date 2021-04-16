var express = require('express');
var router = express.Router();
var db = require("../src/db");


const getTeamMembers = function(){
  return db.teams.findAll({ order: [['displayOrder', 'ASC']] });
};

const getProjects = function(){
  return db.projects.findAll({ order: [['displayOrder', 'ASC']] });
};

const getOdysseyFoundationProjects = function(){
  return db.odysseyFoundationProjects.findAll({ order: [['displayOrder', 'ASC']] });
};

const getTechnologies = function(){
  return db.technologies.findAll({ order: [['displayOrder', 'ASC']] });
};

const getServices = function(){
  return db.services.findAll({ order: [['displayOrder', 'ASC']] });
};

const getCareerPortalLink = function(){
  return db.careerPortalLink.findOne({ order: [['createdAt', 'ASC']] });
};

const getContact = function(){
  return db.contact.findOne({ order: [['createdAt', 'ASC']] });
};

const getHideSection = function(){
  return db.hideSection.findOne({ order: [['createdAt', 'ASC']] });
};

const getSectionIntroduction = function(){
  return db.sectionIntroduction.findOne({ order: [['createdAt', 'ASC']] });
};

/* GET home page. */
router.get('/', function (req, res, next) {
  var teamsPromise = getTeamMembers();
  var projectsPromise = getProjects();
  var odysseyFoundationProjectsPromise = getOdysseyFoundationProjects();
  var technologiesPromise = getTechnologies();
  var servicesPromise = getServices();
  var careerPortalLinkPromise = getCareerPortalLink();
  var contactPromise = getContact();
  var hideSectionPromise = getHideSection();
  var sectionIntroductionPromise = getSectionIntroduction();
  Promise.all([teamsPromise, projectsPromise, odysseyFoundationProjectsPromise, technologiesPromise, servicesPromise, careerPortalLinkPromise, contactPromise, hideSectionPromise, sectionIntroductionPromise]).then((results) => {
    return res.render('index', {members: results[0], odysseyFoundationProjects: results[1], projects: results[2], technologies: results[3], services: results[4], careerPortalLink: results[5], contact: results[6], hideSection: results[7], sectionIntroduction: results[8], headerChanges: false});
  }).catch((err) => {
    return next(err);
  })
});

const getMemberBio = function(id){
  return db.teams.findByPk(id);
};

/* GET Team member's bio page */
router.get('/team-member/:id', function(req, res, next) {
  var memberPromise = getMemberBio(req.params.id);
  var contactPromise = getContact();
  var hideSectionPromise = getHideSection();
  Promise.all([memberPromise, contactPromise, hideSectionPromise]).then((results) => {
    return res.render('bio', {member: results[0], contact: results[1], hideSection: results[2], headerChanges: true});
  }).catch((err) => {
    return next(err);
  })
});

module.exports = router;
