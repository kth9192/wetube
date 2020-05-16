// const express = require("express");
import express from "express";
const app = express();

const home = (req, res) => {
  res.send("its home ");
};
const betweenHome = (req, res, next) => {
  console.log("im middleware");
  next();
};

app.use(betweenHome);

app.get("/", home);

app.get("/profile", (req, res) => {
  res.send("you are on my profile");
});

app.listen(4000, () => {
  console.log("test");
});
