const express = require('express');
const { createKeynote, deleteKeynote, getKeynotes } = require('../controllers/keynoteController');
const { authMiddleware } = require('../controllers/authController');
const router = express.Router();

// Get all keynotes (public)
router.get('/', getKeynotes);

// Create keynote (admin only)
router.post('/', authMiddleware(), createKeynote);

// Delete keynote (admin only)
router.delete('/:id', authMiddleware(), deleteKeynote);

module.exports = router;
