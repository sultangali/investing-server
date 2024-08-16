import mongoose from 'mongoose'

const yearDataSchema = new mongoose.Schema({
    year: { type: String, required: true },
    data: { type: [Number], required: true }
});

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    years: { type: [yearDataSchema], required: true }
});

export default mongoose.model('Product', productSchema)