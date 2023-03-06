import { model, Schema } from "mongoose";

import { EGenders } from "../types/user.types";

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      require: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      require: [true, "Password is required"],
    },
    gender: {
      type: String,
      enum: EGenders,
    },
  },
  {
    versionKey: false,
  }
);

export const User = model("user", userSchema);
