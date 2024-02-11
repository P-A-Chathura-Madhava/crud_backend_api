import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const getAllUsers = asyncHandler(async(req, res) => {
    console.log("getAllUsers");
    try {
        const response = await User.find();
        res.json(response);
    } catch (error) {
        console.log("Errer fetching data");
    }
})

const createUser = asyncHandler(async(req, res)=>{
    console.log("createUser");
    try {
        const response = await User.create(req.body);
        res.json(response);
    } catch (error) {
        console.log("Error creating user");
    }
})

const updateUser = asyncHandler(async(req, res) => {
    const {_id} = req.params;
    try {
        console.log("updateUser");
        const response = await User.findByIdAndUpdate(_id, {
            name: req?.body?.name,
            address: req?.body?.address
        },
        {
            new: true
        }
        );
        res.json(response);
    } catch (error) {
        console.log("Error updating user");
    }
})

const deleteAUser = asyncHandler(async(req, res) => {
    const {id} = req.params;
    console.log("deleteAUser");
    try {
        const response = await User.findByIdAndDelete(id);
        res.json(response);
    } catch (error) {
        console.log("Error deleting user");
    }
})

export {getAllUsers, createUser, updateUser, deleteAUser};