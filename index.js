// const express = require("express");
import express from "express";
const app = express();

function handleHome(req, res) {
  console.log(req);
  res.send("hello from home");
}

function handleProfile(req, res) {}

app.get("/", (req, res) => {});

app.get("/profile", (req, res) => {
  res.send("you are on my profile");
});

app.listen(4000, () => {
  console.log("test");
});
