import mongoose from 'mongoose';

const tourPackageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    photos: {
        type: [String],
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    duration: {
        type: Number, // Duration in days
        required: true,
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
    },
    availableDates: [{
        type: Date,
        required: true,
    }],
    featured: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

const TourPackage = mongoose.model('TourPackage', tourPackageSchema);

export default TourPackage;
