import express from "express";
import mongoose from "mongoose";
import { shortUrl, getOriginalUrl } from "./controllers/UrlShortner.js";
import dotenv from "dotenv";
import connectDB from "./config/database.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs", { shortUrl: null });
});

app.post("/short", shortUrl);
app.get("/:shortCode", getOriginalUrl);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running at port ${PORT}`);
});
