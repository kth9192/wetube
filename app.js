import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { userRouter } from "./router.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(helmet());

app.get("/", (req, res) => {
  res.send("test");
});

app.get("/profile", (req, res) => {
  res.send("you are on my profile");
});

app.use("/user", userRouter);

export default app;
