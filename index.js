import express from"express";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import productRoutes from "./routes/productRoutes.js"
import specificationRoutes from "./routes/specificationRoutes.js"
import categoryRoutes from "./routes/categoryRoutes.js"
import supplierRoutes from "./routes/supplierRoutes.js"

import { categories,specifications,products } from "./data/data.js";
import Category from "./models/Category.js";
import Specification from "./models/Specification.js";
import Product from "./models/Product.js";

const app = express()
dotenv.config();
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


app.get("/",(req,res)=>{
  res.send("helo")
})

app.use('/products', productRoutes);
app.use('/specs',specificationRoutes)
app.use('/categories', categoryRoutes);
app.use('/supplier',supplierRoutes)

const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));


  // Prodduct.insertMany(productds)