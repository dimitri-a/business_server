import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Shop = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    blend: {
        type: String
    },
    rating: {
        type: Number,
    }
});

export default mongoose.model('Shop', Shop);