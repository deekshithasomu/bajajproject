let mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose.connect("mongodb://127.0.0.1:27017/Players");
let db = mongoose.connection;
db.on("open", () => {
  console.log("Database connected");
});
db.on("error", () => {
  console.log("Error while connecting to database");
});
