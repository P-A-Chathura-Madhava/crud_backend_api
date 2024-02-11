import mongoose from "mongoose";

// Declare the Schema of the Mongo model
let userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    }
});

//Export the model
const User = mongoose.model('User', userSchema);

export default User;