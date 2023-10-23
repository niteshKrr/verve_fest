require("./conn/mongo");

const { User } = require("./models/myModel");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.post("/user", (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.get("/students", async (req, res) => {
  try {
    const userData = await User.find();
    res.send(userData);
  } catch (e) {
    res.send(e);
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App started on http://localhost:${port}`);
});
