import express from "express";
import { createUser, deleteAUser, getAllUsers, updateUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/getUsers", getAllUsers);
router.post("/createAUser", createUser);
router.put("/updateAUser/:_id", updateUser);
router.delete("/deleteAUser/:id", deleteAUser);

export default router;