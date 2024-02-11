import mongoose from "mongoose";

const dbConnect = () => {
    try {
        const conn = mongoose.connect("mongodb://localhost:27017/crud_test");
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.log("Error Conntecting to MongoDB");
    }
}

export default dbConnect;