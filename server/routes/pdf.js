const express = require('express');
const router = express.Router();
const {
  getAllPdfDocuments,
  getPdfDocumentsByPage,
  getPdfDocumentsByCategory,
  createPdfDocument,
  updatePdfDocument,
  deletePdfDocument,
  getAllPdfDocumentsAdmin
} = require('../controllers/pdfController');
const { authMiddleware } = require('../controllers/authController');

// Public routes
router.get('/', getAllPdfDocuments);
router.get('/page/:page', getPdfDocumentsByPage);
router.get('/category/:category', getPdfDocumentsByCategory);

// Admin routes
router.get('/admin', authMiddleware(), getAllPdfDocumentsAdmin);
router.post('/', authMiddleware(), createPdfDocument);
router.put('/:id', authMiddleware(), updatePdfDocument);
router.delete('/:id', authMiddleware(), deletePdfDocument);

module.exports = router;
