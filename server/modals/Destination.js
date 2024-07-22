import mongoose from 'mongoose';

const destinationSchema = new mongoose.Schema({
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
    packages: {
        type: [String],
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

const Destination = mongoose.model('Destination', destinationSchema);

export default Destination;
