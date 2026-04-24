import { z } from 'zod';
import { artworkConstants } from '../../constants/artworkConstants.js';

export const CreateArtworkSchema = z.object({
  title: z
    .string({ required_error: 'Title is required!' })
    .nonempty('Title is required!')
    .min(
      artworkConstants.MIN_TITLE_LENGTH,
      `Title must be at least ${artworkConstants.MIN_TITLE_LENGTH} characters!`
    ),

  description: z
    .string()
    .optional(),

  price: z
    .number({
      invalid_type_error: 'Price must be a number!',
    })
    .positive('Price must be a positive number!')
    .optional(),

  imageUrl: z
    .string({ required_error: 'Image URL is required!' })
    .nonempty('Image URL is required!')
    .min(
      artworkConstants.MIN_IMG_URL_LENGTH,
      `Image URL must be at least ${artworkConstants.MIN_IMG_URL_LENGTH} characters!`
    ),

  style: z
    .string({ required_error: 'Style is required!' })
    .nonempty('Style is required!'),

  medium: z
    .string({ required_error: 'Medium is required!' })
    .nonempty('Medium is required!'),
});