import express from "express";
import * as productRoutes from "./routes/productRoutes.js";
import mongoConnection from "./config/productMongo.js";
import cors from "cors";

const app = express();
app.use(cors());

mongoConnection();

app.use(express.json());

app.use(productRoutes.router);

app.listen(8090);