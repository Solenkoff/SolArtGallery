import { z } from 'zod';
import { styleConstants } from '../../constants/styleConstants.js';

export const EditStyleSchema = z.object({
  name: z
    .string()
    .nonempty('Style name cannot be empty!')
    .min(
      styleConstants.MIN_NAME_LENGTH,
      `Style name must be at least ${styleConstants.MIN_NAME_LENGTH} characters!`
    )
    .optional(),

  description: z.string().optional(),
});