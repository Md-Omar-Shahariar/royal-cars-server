const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/apple", (req, res) => {
  res.send([{ name: "Afridi" }, { name: "saad" }]);
});

app.listen(port, () => {
  console.log("Listening to server");
});
