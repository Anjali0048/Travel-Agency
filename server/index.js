import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors"
import authRoute from "./routes/authRoute.js"

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8800;

// database connection
mongoose.connect(process.env.MONGO_URL)
.then(() => { 
  console.log("Database connected successfully"); 
})
.catch((error) => console.log(`${error} database did not connect`))

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected")
}) 

// inbuild middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// routes
app.use("/api/auth", authRoute)


app.get("/", (req,res) => {
  res.send("Hello from backend");
})

app.listen(PORT, () => {
    console.log(`App listening on port http://localhost:${PORT}`);
});