import { z } from 'zod';
import { artworkConstants } from '../../constants/artworkConstants.js';

export const EditArtworkSchema = z.object({
  title: z
    .string()
    .nonempty('Title cannot be empty!')
    .min(
      artworkConstants.MIN_TITLE_LENGTH,
      `Title must be at least ${artworkConstants.MIN_TITLE_LENGTH} characters!`
    )
    .optional(),

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
    .string()
    .nonempty('Image URL cannot be empty!')
    .min(
      artworkConstants.MIN_IMG_URL_LENGTH,
      `Image URL must be at least ${artworkConstants.MIN_IMG_URL_LENGTH} characters!`
    )
    .optional(),

  style: z
    .string()
    .nonempty('Style cannot be empty!')
    .optional(),

  medium: z
    .string()
    .nonempty('Medium cannot be empty!')
    .optional(),
});