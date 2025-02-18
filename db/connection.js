const mongoose = require("mongoose");

const connection = mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connection to DB established...");
  })
  .catch((error) => {
    console.error("Connection to DB failed...", error.toString());
    console.log(process.env.MONGO_URI);
  });

module.exports = connection;
