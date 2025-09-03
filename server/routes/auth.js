const express = require('express');
const { register, login, authMiddleware } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);

router.get('/me', authMiddleware(), (req, res) => {
  res.json({ user: { id: req.user.id, username: req.user.username } });
});

module.exports = router;
