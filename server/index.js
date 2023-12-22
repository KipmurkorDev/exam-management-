const expresss = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = expresss();
require("dotenv").config();
app.use(cors());

app.use(bodyParser.json());

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Database connected");
  })
  .catch((Error) => {
    console.log(`Database error ${Error}`);
  });
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`The server is running at port:${port}`);
});
