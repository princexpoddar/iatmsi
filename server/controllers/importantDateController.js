const ImportantDate = require('../models/ImportantDate');

exports.createImportantDate = async (req, res) => {
  try {
    const dateData = req.body;
    const importantDate = new ImportantDate(dateData);
    await importantDate.save();
    res.status(201).json(importantDate);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getImportantDates = async (req, res) => {
  try {
    const dates = await ImportantDate.find({ isActive: true }).sort({ order: 1, priority: -1, date: 1 });
    res.json(dates);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllImportantDates = async (req, res) => {
  try {
    const dates = await ImportantDate.find().sort({ order: 1, priority: -1, date: 1 });
    res.json(dates);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getImportantDateById = async (req, res) => {
  try {
    const importantDate = await ImportantDate.findById(req.params.id);
    if (!importantDate) {
      return res.status(404).json({ error: 'Important date not found' });
    }
    res.json(importantDate);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateImportantDate = async (req, res) => {
  try {
    const importantDate = await ImportantDate.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!importantDate) {
      return res.status(404).json({ error: 'Important date not found' });
    }
    res.json(importantDate);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteImportantDate = async (req, res) => {
  try {
    const importantDate = await ImportantDate.findByIdAndDelete(req.params.id);
    if (!importantDate) {
      return res.status(404).json({ error: 'Important date not found' });
    }
    res.json({ message: 'Important date deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getImportantDatesByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const dates = await ImportantDate.find({ category, isActive: true }).sort({ date: 1 });
    res.json(dates);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
