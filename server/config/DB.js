const mongoose = require("mongoose");

const connectDB = async () => {

  const uri = `mongodb+srv://${encodeURIComponent(process.env.DB_USER)}:${encodeURIComponent(process.env.DB_PASS)}@iatmsi.pfcvabq.mongodb.net/?retryWrites=true&w=majority&appName=IATMSI`
  

  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
