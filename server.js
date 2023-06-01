const mongoose = require("mongoose");
const app = require("./app");

const DB_HOST = "mongodb+srv://zahar:lololoshka@cluster0.wamwqft.mongodb.net/";

mongoose.set("strictQuery", true);
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
