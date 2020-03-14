import { Router } from "express";
import {
    getUsers,
    getUserByID,
    updateUser,
    deleteUser,
    createUser
} from "../controllers/user.controller";

const router = Router();

router
    .get("", getUsers)
    .get("/:id", getUserByID)
    .post("", createUser)
    .put("/:id", updateUser)
    .delete("/:id", deleteUser);

export default router;
