import { z } from 'zod';
import { mediumConstants } from '../../constants/mediumConstants.js';

export const CreateMediumSchema = z.object({
  name: z
    .string({ required_error: 'Medium name is required!' })
    .nonempty('Medium name is required!')
    .min(
      mediumConstants.MIN_NAME_LENGTH,
      `Medium name must be at least ${mediumConstants.MIN_NAME_LENGTH} characters!`
    ),

  description: z.string().optional(),
});