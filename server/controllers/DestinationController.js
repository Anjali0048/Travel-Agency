import Destination from "../modals/Destination.js"

export const createTour = async (req,res,next) => {
    const newTour = new Destination(req.body)
    try {
        const savedTour = await newTour.save();
        res.status(201).json(savedTour)
        console.log(savedTour)
    } catch (error) {
        next(error);
    }
}

export const updateTour = async (req,res,next) => {
    try {
        const updateTour = await Destination.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
        );
        res.status(201).json(updateTour)
        // console.log(updateTour)
    } catch (error) {
        next(error);
    }
}

export const deleteTour = async (req,res,next) => {
    try {
        await Destination.findByIdAndDelete(req.params.id);
        res.status(200).json("Tour package deleted successfully")
    } catch (error) {
        next(error);
    }
}

export const getTour = async (req,res, next) => {
    try {
        const tour = await Destination.findById(req.params.id);
        res.status(200).json(tour);
    } catch (error) {
        next(error)
    }
}

export const getAllTours = async (req,res,next) => {
    const {...others} = req.query;
    try {
        const tours = await Destination.find({
            ...others,
        });
        res.status(200).json(tours);
    } catch (err) {
        next(err);
    }
}