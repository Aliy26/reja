console.log("Web Serverni Boshlash");
const express = require("express");
const app = express();

const fs = require("fs");

// MongoDB call
const db = require("./server").db();
const mongodb = require("mongodb");
let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

// 1 Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code

// 3 Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code
app.post("/create-item", (req, res) => {
  console.log(req.body);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    console.log(data.ops);
    res.json(data.ops[0]);
  });
});

// app.post("/delete-item", (req, res) => {
//   const id = req.body.id;
//   db.collection("plans").deleteOne(
//     { _id: new mongodb.ObjectId(id) },
//     function (err, data) {
//       res.json({ state: "success" });
//     }
//   );
// });

app.get("/", function (req, res) {
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        console.log(data);
        res.render("reja", { items: data });
      }
    });
  app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    console.log("deleted id", id);

    if (mongodb.ObjectId.isValid(id)) {
      db.collection("plans").deleteOne(
        { _id: new mongodb.ObjectId(id) },
        function (err, data) {
          if (err) {
            res.json({ state: "error", message: "An error occurred" });
          } else {
            res.json({ state: "success" });
          }
        }
      );
    } else {
      res.json({ state: "error", message: "Invalid ID format" });
    }
  });

  app.get("/author", (req, res) => {
    res.render("author", { user: user });
  });
});

module.exports = app;
