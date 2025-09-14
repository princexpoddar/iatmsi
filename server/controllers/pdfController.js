const PdfDocument = require('../models/PdfDocument');

// Get all PDF documents
exports.getAllPdfDocuments = async (req, res) => {
  try {
    const pdfs = await PdfDocument.find({ isActive: true }).sort({ order: 1, createdAt: -1 });
    res.json(pdfs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get PDF documents by page
exports.getPdfDocumentsByPage = async (req, res) => {
  try {
    const { page } = req.params;
    const pdfs = await PdfDocument.find({ page, isActive: true }).sort({ order: 1, createdAt: -1 });
    res.json(pdfs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get PDF documents by category
exports.getPdfDocumentsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const pdfs = await PdfDocument.find({ category, isActive: true }).sort({ order: 1, createdAt: -1 });
    res.json(pdfs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create PDF document (Admin only)
exports.createPdfDocument = async (req, res) => {
  try {
    const { title, description, url, category, page, order } = req.body;
    const pdfDocument = new PdfDocument({ title, description, url, category, page, order });
    await pdfDocument.save();
    res.status(201).json(pdfDocument);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update PDF document (Admin only)
exports.updatePdfDocument = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, url, category, page, isActive, order } = req.body;
    const pdfDocument = await PdfDocument.findByIdAndUpdate(
      id,
      { title, description, url, category, page, isActive, order },
      { new: true, runValidators: true }
    );
    if (!pdfDocument) {
      return res.status(404).json({ error: 'PDF document not found' });
    }
    res.json(pdfDocument);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete PDF document (Admin only)
exports.deletePdfDocument = async (req, res) => {
  try {
    const { id } = req.params;
    const pdfDocument = await PdfDocument.findByIdAndDelete(id);
    if (!pdfDocument) {
      return res.status(404).json({ error: 'PDF document not found' });
    }
    res.json({ message: 'PDF document deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all PDF documents for admin (including inactive)
exports.getAllPdfDocumentsAdmin = async (req, res) => {
  try {
    const pdfs = await PdfDocument.find().sort({ order: 1, createdAt: -1 });
    res.json(pdfs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
