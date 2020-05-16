const express = require("express");
const app = express();

function handleHome(req, res) {
  console.log(req);
  res.send("hello from home");
}

function handleProfile(req, res) {
  res.send("you are on my profile");
}

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(4000, () => {
  console.log("test");
});
