import Package from '../modals/Package.js'; 
import Destination from '../modals/Destination.js'; 
import User from '../modals/User.js'; 
import { createError } from '../middlewares/error.js'; 

export const createPackage = async (req, res, next) => {
    const tourId = req.params.tourId;
    const newPackage = new Package(req.body);

    try {
      const savedPackage = await newPackage.save();
      try {
        await Destination.findByIdAndUpdate(tourId, {
          $push: { packages: savedPackage._id },
        });
      } catch (err) {
        next(err);
      }
      res.status(200).json(savedPackage);
    } catch (err) {
      next(err);
    }
};

export const updatePackage = async (req, res, next) => {
    try {
        const updatedPackage = await Package.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )
        // .populate('user Destination');
        if (!updatedPackage) return next(createError(404, 'Package not found'));

        res.status(200).json(updatedPackage);
    } catch (err) {
        next(err);
    }
};

export const deletePackage = async (req, res, next) => {
    const tourId = req.params.tourId;
    try {
      await Destination.findByIdAndDelete(req.params.id);
      try {
        await Destination.findByIdAndUpdate(tourId, {
          $pull: { packages: req.params.id },
        });
      } catch (err) {
        next(err);
      }
      res.status(200).json("package has been deleted.");
    } catch (err) {
      next(err);
    }
  };

  export const updatePackageAvailability = async (req, res, next) => {
    try {
      await Package.updateOne(
        { "checkInDates._id": req.params.id },
        {
          $push: {
            "checkInDates.$.unavailableDates": req.body.dates
          },
        }
      );
      res.status(200).json("package status has been updated.");
    } catch (err) {
      next(err);
    }
  };

export const getAllPackages = async (req, res, next) => {
    try {
        const pack = await Package.find()
        res.status(200).json(pack);
    } catch (err) {
        next(err);
    }
};

export const getPackageById = async (req, res, next) => {
    try {
        const pack = await Package.findById(req.params.id);
        if (!pack) return next(createError(404, 'package not found'));

        res.status(200).json(pack);
    } catch (err) {
        next(err);
    }
};

