import mongoose from 'mongoose';
import { uuid } from 'uuidv4';
import user from './user.js';
const { Schema } = mongoose;

const ProductReviewSchema = new mongoose.Schema (
  {
    _id: {
      type: String,
      default: uuid,
    },
    name: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
    },
    user: User,
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

export default mongoose.model('product_review', ProductReviewSchema);