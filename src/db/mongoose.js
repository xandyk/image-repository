const mongoose = require("mongoose");
const url = process.env.MONGODB_URL

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", () => {
  console.log("Failed to connect to mongodb. Exiting...");
  process.exit(1);
});

db.once("open", function () {
  console.log("Connected to mongodb instance");
});

process.on("SIGINT", () => {
  console.log("Stopping the app....");
  mongoose.connection.close((err) => {
    console.log("Closing mongodb connection...");
  });
});
