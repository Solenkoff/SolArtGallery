import { model, Query, Schema } from 'mongoose';
import { artworkConstants } from '../constants/artworkConstants.js';

const artworkSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: artworkConstants.MIN_TITLE_LENGTH,
    },
    description: {
      type: String,
      default: artworkConstants.DEFAULT_DESCRIPTION,
    },
    price: {
      type: Number,
      required: false,
    },
    imageUrl: {
      type: String,
      required: true,
      minLength: artworkConstants.MIN_IMG_URL_LENGTH,
    },
    style: {
      type: Schema.Types.ObjectId,
      ref: 'style',
      required: true,
    },
    medium: {
      type: Schema.Types.ObjectId,
      ref: 'medium',
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'user',
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
  },
  { timestamps: true }
);

artworkSchema.pre(/^find/, function (this: Query<any, any>, next) {
  this.populate([
    { path: 'style', select: 'name description author' },
    { path: 'medium', select: 'name description author' },
    { path: 'likes', select: 'username' },
    { path: 'author', select: 'username email' },
  ]);

  next();
});

export default model('artwork', artworkSchema);