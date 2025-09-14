const express = require('express');
const { 
  createAuthor, 
  getAuthors, 
  getAuthorById, 
  updateAuthor, 
  deleteAuthor,
  getAuthorsByTrack,
  getAuthorsByStatus
} = require('../controllers/authorController');
const { authMiddleware } = require('../controllers/authController');
const router = express.Router();

// Public routes
router.get('/', getAuthors);
router.get('/track/:track', getAuthorsByTrack);
router.get('/status/:status', getAuthorsByStatus);
router.get('/:id', getAuthorById);

// Protected routes (admin only)
router.post('/', authMiddleware(), createAuthor);
router.put('/:id', authMiddleware(), updateAuthor);
router.delete('/:id', authMiddleware(), deleteAuthor);

module.exports = router;
