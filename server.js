const http = require("http");
const mongodb = require("mongodb");

let database;
const connectionString =
  "mongodb+srv://Aliy:coursera2@cluster0.pa0zbxu.mongodb.net/Reja";

mongodb.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) console.log("Error in connecting to MongoDB");
    else {
      console.log("MongoDB connection was successful");
      //   console.log(client);
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, () => {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);

console.log("You're in app.js file by the way");
