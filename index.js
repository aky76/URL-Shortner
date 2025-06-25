import express from 'express'
import mongoose from 'mongoose';
import { shortUrl, getOriginalUrl } from './controllers/UrlShortner.js';
import dotenv from "dotenv"; 
import connectDB from "./config/database.js";

dotenv.config({});

const PORT = process.env.PORT || 5000;


const app = express();

app.use(express.urlencoded({extended:true}))



  // rendering the ejs file
  app.get('/',(req,res)=>{
    res.render("index.ejs", {shortUrl :null})
  })

  // shorting url logic
  app.post('/short',shortUrl)

  // redirect to original url using short code :- dynamic routing
  app.get("/:shortCode", getOriginalUrl);

app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server listen at prot ${PORT}`);
});

