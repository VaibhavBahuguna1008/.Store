import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from "./routes/productRoutes.js";
import path from 'path'
import { fileURLToPath } from "url";

//configure env
dotenv.config();

//databse config
connectDB();


//esmodule fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//rest object
const app = express();

//middelwares
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,

}

app.use(cors(corsOptions)); 

app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../client/build")))

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

//rest api
app.get("*", function (_, res) {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
})

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});