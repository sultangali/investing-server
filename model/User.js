import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    hashedPassword: {
      type: String,
      required: true,
    },
    username: String, 
    phone: String, 
    isAdmin: {
      type: Boolean,
      default: false
    },
    status: {
      type: String,
        enum: ['accepted', 'denied'],
        default: 'denied',
    },
    avatar: String,
  },
  { timestamps: true }
);

export default mongoose.model("User", schema)
