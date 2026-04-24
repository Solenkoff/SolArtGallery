import { z } from 'zod';
import { styleConstants } from '../../constants/styleConstants.js';

export const CreateStyleSchema = z.object({
  name: z
    .string({ required_error: 'Style name is required!' })
    .nonempty('Style name is required!')
    .min(
      styleConstants.MIN_NAME_LENGTH,
      `Style name must be at least ${styleConstants.MIN_NAME_LENGTH} characters!`
    ),

  description: z.string().optional(),
});