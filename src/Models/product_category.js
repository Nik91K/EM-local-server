import mongoose from 'mongoose';
import { uuid } from 'uuidv4';
import product from './product.js';
const { Schema } = mongoose;

const ProductCategorySchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: uuid,
    },
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    product: [product],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  }
)

export default mongoose.model('product_category', ProductCategorySchema);