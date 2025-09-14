const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/DB");

dotenv.config();
const app = express();
connectDB();

app.use(
  cors({
    origin: true, // Allow all origins for development
    credentials: true,
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'X-Requested-With',
      'Accept',
      'Origin',
      'client',
      'access_token',
      'refresh_token',
    ],
    exposedHeaders: ['access_token', 'refresh_token'],
  })
);

app.use(express.json());

const PORT = process.env.PORT;
app.use('/api/auth', require('./routes/auth'));
app.use('/api/keynotes', require('./routes/keynote'));
app.use('/api/authors', require('./routes/author'));
app.use('/api/important-dates', require('./routes/importantDate'));
app.use('/api/conference-program', require('./routes/conferenceProgram'));
app.use('/api/pdfs', require('./routes/pdf'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
