
import { z } from 'zod';
const create_Animal = z.object({
  body: z.object({
    title: z.number({
      required_error: 'title is Required (zod)',
    }),
    userId: z.string({
      required_error: 'userId is Required (zod)',
    })
  }),
});

export const AnimalValidation = { create_Animal };


