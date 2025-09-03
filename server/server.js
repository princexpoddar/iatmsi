const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/DB");

dotenv.config();
const app = express();
connectDB();

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // allow non-browser requests like Postman

      const whitelist = process.env.WHITELISTED_URL?.split(','); // allow multiple URLs
      if (whitelist && whitelist.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
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

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
