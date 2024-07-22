import express from 'express';
import { createPackage, deletePackage, getAllPackages, getPackageById, updatePackage, updatePackageAvailability } from '../controllers/PackageController.js';
import { verifyAdmin, verifyUser } from '../middlewares/verifyToken.js';

const router = express.Router();

router.post('/:tourId', verifyAdmin, createPackage);
router.get('/', verifyUser, getAllPackages);
router.get('/:id', verifyUser, getPackageById);
router.put('/:id', verifyAdmin, updatePackage);
router.delete('/:id/:tourId', verifyAdmin, deletePackage);

router.put("/availability/:id", updatePackageAvailability);


export default router;
