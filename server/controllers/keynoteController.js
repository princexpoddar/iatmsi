const Keynote = require('../models/Keynote');

exports.createKeynote = async (req, res) => {
  try {
    const { speaker, affiliation, biography, title, abstract } = req.body;
    const keynote = new Keynote({ speaker, affiliation, biography, title, abstract });
    await keynote.save();
    res.status(201).json(keynote);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteKeynote = async (req, res) => {
  try {
    const { id } = req.params;
    await Keynote.findByIdAndDelete(id);
    res.json({ message: 'Keynote deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getKeynotes = async (req, res) => {
  try {
    const keynotes = await Keynote.find();
    res.json(keynotes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
