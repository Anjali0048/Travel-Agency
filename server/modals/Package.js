import mongoose from 'mongoose';

const packageSchema = new mongoose.Schema({
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true,
    // },
    // Destination: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Destination',
    //     required: true,
    // },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    checkInDates: [{ 
        unavailableDates: {type: [Date]}
    }],
    bookingDate: {
        type: Date,
        default: Date.now(),
    },
    status: {
        type: String,
        enum: ['Pending', 'Confirmed', 'Cancelled'],
        default: 'Pending',
    },
}, { timestamps: true });

const Package = mongoose.model('Package', packageSchema);
export default Package;
