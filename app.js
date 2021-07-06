const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/index");
const mongoose = require("mongoose");
const path = require('path');
// DB Connection
mongoose
  .connect('mongodb://localhost/horse-housing', { useNewUrlParser: true , useUnifiedTopology: true, useCreateIndex: true,})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err.message));

const app = express();

// const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
