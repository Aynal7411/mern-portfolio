const express = require('express');
const { getProjects,
  createProject,
  updateProject,
  deleteProject, } = require('../controllers/projectController');

const router = express.Router();

router.get('/', getProjects);
router.post('/', createProject);       // Create
router.put('/:id', updateProject);     // Update
router.delete('/:id', deleteProject);  // Delete

module.exports = router;
