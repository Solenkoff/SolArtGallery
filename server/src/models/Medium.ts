import { model, Schema } from 'mongoose';
import { mediumConstants } from '../constants/mediumConstants.js';

const mediumSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    _description: {
      type: String,
      default: mediumConstants.DEFAULT_DESCRIPTION,
    },
    get description() {
      return this._description;
    },
    set description(value) {
      this._description = value;
    },
    author: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'user',
    },
  },
  { timestamps: true }
);

export default model('medium', mediumSchema);