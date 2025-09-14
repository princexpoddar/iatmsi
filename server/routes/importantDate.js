const express = require('express');
const { 
  createImportantDate, 
  getImportantDates, 
  getAllImportantDates,
  getImportantDateById, 
  updateImportantDate, 
  deleteImportantDate,
  getImportantDatesByCategory
} = require('../controllers/importantDateController');
const { authMiddleware } = require('../controllers/authController');
const router = express.Router();

// Public routes
router.get('/public', getImportantDates);
router.get('/category/:category', getImportantDatesByCategory);
router.get('/:id', getImportantDateById);

// Protected routes (admin only)
router.get('/', authMiddleware(), getAllImportantDates);
router.post('/', authMiddleware(), createImportantDate);
router.put('/:id', authMiddleware(), updateImportantDate);
router.delete('/:id', authMiddleware(), deleteImportantDate);

module.exports = router;
