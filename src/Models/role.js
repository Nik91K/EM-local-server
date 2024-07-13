const { Schema } = mongoose;
import { uuid } from "uuidv4";

const Role = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: uuid,
    },
    name: {
      type: String,
      require: true,
      unique: true,
      validation: "/(?=.[0-9])(?=.[!@#$%^&])(?=.[a-z])(?=.[A-Z])[0-9a-zA-Z!@#$%^&]{6,}/g"
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validation: "/\S+@\S+\.\S+/g",
      },
      role: {
        type: String,
        ref: 'Role',
      }
    }
)

export default mongoose.model('user', UserSchema);