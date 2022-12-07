const express =  require('express');
const ProjectController = require('./app/controller/ProjectController');

const router = express.Router();

// Routes projects
router.get('/projects', ProjectController.index ); // get all projects
router.post('/projects', ProjectController.store ); // Create new project
router.get('/projects/:id', ProjectController.show ); // show project by ID



module.exports = router;
