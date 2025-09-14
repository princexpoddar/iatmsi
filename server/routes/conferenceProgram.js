const express = require('express');
const { 
  createProgramItem, 
  getProgramItems, 
  getAllProgramItems,
  getProgramItemById, 
  updateProgramItem, 
  deleteProgramItem,
  getProgramItemsByType
} = require('../controllers/conferenceProgramController');
const { authMiddleware } = require('../controllers/authController');
const router = express.Router();

// Public routes
router.get('/public', getProgramItems);
router.get('/type/:type', getProgramItemsByType);
router.get('/:id', getProgramItemById);

// Protected routes (admin only)
router.get('/', authMiddleware(), getAllProgramItems);
router.post('/', authMiddleware(), createProgramItem);
router.put('/:id', authMiddleware(), updateProgramItem);
router.delete('/:id', authMiddleware(), deleteProgramItem);

module.exports = router;
