import express from "express"
import { createTour, deleteTour, getAllTours, getTour, updateTour } from "../controllers/TourPackageController.js";
import { verifyAdmin } from "../middlewares/verifyToken.js";
const router = express.Router();

router.post("/createTour",verifyAdmin, createTour);
router.put("/updateTour/:id",verifyAdmin, updateTour);
router.delete("/deleteTour/:id",verifyAdmin, deleteTour);
router.get("/getTour/:id", getTour);
router.get("/getAllTours", getAllTours);

export default router;