
import { z } from 'zod';
const create_Category = z.object({
  body: z.object({
    title: z.number({
      required_error: 'title is Required (zod)',
    }),
    userId: z.string({
      required_error: 'userId is Required (zod)',
    })
  }),
});

export const CategoryValidation = { create_Category };


