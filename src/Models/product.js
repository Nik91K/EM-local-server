import mongoose from 'mongoose';
import { uuid } from 'uuidv4';
import product_review from './product_review.js';
const { Schema } = mongoose;

const ProductSchema = new mongoose.Schema (
  {
    _id: {
      type: String,
      default: uuid,
    },
    name: {
      type: String,
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
    category: {
      type: String,
      ref: 'ProductCategory',
      required: true,
    },
    product_review: [product_review],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    }
  }
)

export default mongoose.model('product', ProductSchema);