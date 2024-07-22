import express from "express"
import { verifyAdmin, verifyUser } from "../middlewares/verifyToken.js";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/UserController.js";

const router = express.Router();

router.put("/:id", verifyUser, updateUser);
router.delete("/:id", verifyUser, deleteUser);
router.get("/:id", verifyUser, getUser);
router.get("/", verifyAdmin, getUsers);

export default router;