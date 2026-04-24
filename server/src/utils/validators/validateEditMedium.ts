import { z } from 'zod';
import { mediumConstants } from '../../constants/mediumConstants.js';

export const EditMediumSchema = z.object({
  name: z
    .string()
    .nonempty('Medium name cannot be empty!')
    .min(
      mediumConstants.MIN_NAME_LENGTH,
      `Medium name must be at least ${mediumConstants.MIN_NAME_LENGTH} characters!`
    )
    .optional(),

  description: z.string().optional(),
});