// createUser.js
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User'); // adjust path if needed

const MONGO_URI = `mongodb+srv://${encodeURIComponent(process.env.DB_USER)}:${encodeURIComponent(process.env.DB_PASS)}@iatmsi.pfcvabq.mongodb.net/?retryWrites=true&w=majority&appName=IATMSI`

async function createUser() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const username = process.argv[2];
    const password = process.argv[3];

    if (!username || !password) {
      console.error('Usage: node createUser.js <username> <password>');
      process.exit(1);
    }

    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      console.error('User already exists with this username');
      process.exit(1);
    }

    const user = new User({ username, password });
    await user.save();

    console.log(`✅ User '${username}' created successfully!`);
    process.exit(0);
  } catch (err) {
    console.error('❌ Error creating user:', err.message);
    process.exit(1);
  }
}

createUser();
