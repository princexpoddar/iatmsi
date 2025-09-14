const ConferenceProgram = require('../models/ConferenceProgram');

exports.createProgramItem = async (req, res) => {
  try {
    const programData = req.body;
    const programItem = new ConferenceProgram(programData);
    await programItem.save();
    res.status(201).json(programItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getProgramItems = async (req, res) => {
  try {
    const programItems = await ConferenceProgram.find({ isActive: true }).sort({ order: 1, createdAt: 1 });
    res.json(programItems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllProgramItems = async (req, res) => {
  try {
    const programItems = await ConferenceProgram.find().sort({ order: 1, createdAt: 1 });
    res.json(programItems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProgramItemById = async (req, res) => {
  try {
    const programItem = await ConferenceProgram.findById(req.params.id);
    if (!programItem) {
      return res.status(404).json({ error: 'Program item not found' });
    }
    res.json(programItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProgramItem = async (req, res) => {
  try {
    const programItem = await ConferenceProgram.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!programItem) {
      return res.status(404).json({ error: 'Program item not found' });
    }
    res.json(programItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteProgramItem = async (req, res) => {
  try {
    const programItem = await ConferenceProgram.findByIdAndDelete(req.params.id);
    if (!programItem) {
      return res.status(404).json({ error: 'Program item not found' });
    }
    res.json({ message: 'Program item deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProgramItemsByType = async (req, res) => {
  try {
    const { type } = req.params;
    const programItems = await ConferenceProgram.find({ type, isActive: true }).sort({ order: 1 });
    res.json(programItems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
