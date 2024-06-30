import mongoose from 'mongoose';
import { uuid } from 'uuidv4';
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: uuid,
    },
    name: {
      type: String
    },
    email: {
      type: String,
      required: true,
      validation: "/\S+@\S+\.+/g",
    },
    password: {
      type: String,
      required: true 
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
  }
)

export default mongoose.model('user', UserSchema);