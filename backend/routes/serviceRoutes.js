const express = require('express');
const router = express.Router();
const {
  getServices,
  createService,
  deleteService,
} = require('../controllers/serviceController');

// GET all services
router.get('/', getServices);

// CREATE a new service
router.post('/', createService);

// DELETE a service
router.delete('/:id', deleteService);

module.exports = router;
