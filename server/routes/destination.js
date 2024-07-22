import express from "express"
import { createTour, deleteTour, getAllTours, getTour, updateTour } from "../controllers/DestinationController.js";
import { verifyAdmin } from "../middlewares/verifyToken.js";
const router = express.Router();

router.post("/",verifyAdmin, createTour);
router.put("/:id",verifyAdmin, updateTour);
router.delete("/:id",verifyAdmin, deleteTour);
router.get("/:id", getTour);
router.get("/", getAllTours);


export default router;