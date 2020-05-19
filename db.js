import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

const handleOpen = () => console.log("connecting db 👊");
const handleError = () => console.log("error 💢");

db.once("open", handleOpen);
db.on("error", handleError);
