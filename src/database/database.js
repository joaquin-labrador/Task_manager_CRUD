import mongoose from "mongoose";
import {MONGODB_URI} from "../config.js";
 (() => {
  try {
    const db = mongoose.connect(MONGODB_URI);
    console.log("MongoDB Connected" , db.connection.name);
  } catch (error) {
    console.log("Error connecting to database", error);
  }
})();

