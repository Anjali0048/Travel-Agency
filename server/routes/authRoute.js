import express from "express"
import { getUsers, login, signup } from "../controllers/AuthController.js";
import { verifyAdmin } from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/signup", signup)
router.post("/login", login)
router.get("/getUsers", verifyAdmin, getUsers)

export default router;