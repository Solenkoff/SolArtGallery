import { model, Schema } from 'mongoose';
import { styleConstants } from '../constants/styleConstants.js';

const styleSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: styleConstants.DEFAULT_DESCRIPTION,
    },
    author: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'user',
    },
  },
  { timestamps: true }
);

export default model('style', styleSchema);