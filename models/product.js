import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const Product = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, maxLength: 600, required: true },
    category: {
      type: String,
      enum: ['cpu', 'gpu', 'motherboard', 'ram', 'storage', 'case', 'power supply'],
      required: true,
    },
    imgURL: { type: String },
    link: { type: String },
    userId: {type: Schema.Types.ObjectId, ref: 'users'}
  },
  { timestamps: true }
);
export default mongoose.model('products', Product);
