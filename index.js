import express from "express";
import dbConnect from "./config/dbConnect.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";

const app = express();
dbConnect();
app.use(cors());
const PORT = 5000;

app.use(express.json());

app.use("/user", userRoutes);

// app.use("/", (req, res)=>{
//     res.send("Server Working");
// });

app.listen(PORT, ()=>{
    console.log("Server is working on PORT : 5000");
})