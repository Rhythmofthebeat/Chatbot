import express from 'express'
import { config } from 'dotenv';
import morgan from 'morgan'
import appRouter from './routes/index.js';
import cookieParser from 'cookie-parser';
import cors from "cors";
config();
const app = express();
//REQUESTS: in backend development
// GET (get data)
// PUT- Modify data
// POST send data
// DELETE send data to delete something
//app.get("/hello", (req, res, next) => {
//return res.send("Hello"); 
//}); 

//middlewares
app.use(cors({origin:"http://localhost:5173", credentials:true}));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
//remove it in production
app.use(morgan("dev"));

app.use("/api/v1", appRouter);
export default app;

