import { Url } from "../models/UrlSchema.js";
import { nanoid } from "nanoid";

export const shortUrl = async (req, res) => {
  try {
    const longUrl = req.body.longUrl;
    if (!longUrl) {
      return res.status(400).render("index.ejs", { shortUrl: null });
    }

    const shortCode = nanoid();

    const shortUrl = `https://url-shortner-omqm.onrender.com/${shortCode}`;

    const newUrl = new Url({ shortCode, longUrl });
    await newUrl.save();

    console.log("Short saved:", newUrl);
    res.render("index.ejs", { shortUrl });
  } catch (error) {
    console.error("Shortening error:", error.message);
    res.status(500).render("index.ejs", { shortUrl: null });
  }
};

export const getOriginalUrl = async (req, res) => {
  try {
    const shortCode = req.params.shortCode;
    const originalUrl = await Url.findOne({ shortCode });

    if (originalUrl) {
      res.redirect(originalUrl.longUrl);
    } else {
      res.status(404).send("Short URL not found");
    }
  } catch (err) {
    console.error("Redirect error:", err.message);
    res.status(500).send("Server error");
  }
};
