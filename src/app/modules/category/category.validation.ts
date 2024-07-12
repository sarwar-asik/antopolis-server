import { z } from 'zod';
const create_Category = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is Required (zod)',
    }),
  }),
});

export const CategoryValidation = { create_Category };
