const express = require("express");
const app = express();
const path = require("path");
const MongoClient = require("mongodb").MongoClient;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const PORT = 5050;
const MONGO_URL = "mongodb://root:secret@localhost:27017";
const client = new MongoClient(MONGO_URL);
const dbName = "test-db";

//GET all users
app.get("/getUsers", async (req, res) => {
  await client.connect(URL);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  const data = await db.collection("users").find({}).toArray();

  client.close();
  res.send(data);
});

//POST new user
app.post("/addUser", async (req, res) => {
  const userObj = req.body;
  console.log(req.body);
  await client.connect(URL);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  const data = await db.collection("users").insertOne(userObj);
  console.log(data);
  console.log("data inserted in DB");
  client.close();
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

// feature one code...
