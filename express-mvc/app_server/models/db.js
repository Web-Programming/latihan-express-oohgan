require('./mahasiswa');
 
const mongoose = require("mongoose");
const dbURI = "mongodb+srv://paw2:si@paw2.iendmj6.mongodb.net/PAWII-SI?retryWrites=true&w=majority&appName=paw2";

mongoose.connect(dbURI, {
  // useNewUrlParser: true
});
mongoose.connection.on("connected", () => {
//   console.log("Connected to MongoDB");
    console.log("Weebs Detected");
});
mongoose.connection.on("error", (err) => {
  console.log("Connection error: " + err);
});
mongoose.connection.on("disconnected", () => {
  console.log("Disconeected");
});
