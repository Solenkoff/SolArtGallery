import { CallbackError, model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

import environment from '../constants/environment.js';
import { mongooseConst } from '../constants/constants.js';

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minLength: mongooseConst.MIN_USERNAME_LENGTH,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minLength: mongooseConst.MIN_EMAIL_LENGTH,
    },
    password: {
      type: String,
      required: true,
      minLength: mongooseConst.MIN_PASSWORD_LENGTH,
    },
     country: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      enum: ['artist', 'admin'],
      default: 'artist',
    },
    tokenVersion: {
      type: Number,
      default: 1,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: { type: Date, default: null },
  },
  { collation: { locale: 'en', strength: 2 }, timestamps: true }
);

userSchema.index(
  { deletedAt: 1 },
  { expireAfterSeconds: mongooseConst.EXPIRES_AFTER_SECONDS }
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    const hashedPassword = await bcrypt.hash(this.password, environment.HASH_ROUNDS);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error as CallbackError);
  }
});

export default model('user', userSchema);