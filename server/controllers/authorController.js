const Author = require('../models/Author');

exports.createAuthor = async (req, res) => {
  try {
    const authorData = req.body;
    const author = new Author(authorData);
    await author.save();
    res.status(201).json(author);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAuthors = async (req, res) => {
  try {
    const authors = await Author.find().sort({ createdAt: -1 });
    res.json(authors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAuthorById = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    if (!author) {
      return res.status(404).json({ error: 'Author not found' });
    }
    res.json(author);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateAuthor = async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!author) {
      return res.status(404).json({ error: 'Author not found' });
    }
    res.json(author);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteAuthor = async (req, res) => {
  try {
    const author = await Author.findByIdAndDelete(req.params.id);
    if (!author) {
      return res.status(404).json({ error: 'Author not found' });
    }
    res.json({ message: 'Author deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAuthorsByTrack = async (req, res) => {
  try {
    const { track } = req.params;
    const authors = await Author.find({ track }).sort({ createdAt: -1 });
    res.json(authors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAuthorsByStatus = async (req, res) => {
  try {
    const { status } = req.params;
    const authors = await Author.find({ status }).sort({ createdAt: -1 });
    res.json(authors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
