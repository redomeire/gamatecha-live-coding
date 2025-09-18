import { z } from 'zod';

export const todoSchema = z.object({
  /**
   * @todo: Add the validation for the title and the description
   * - Title: required, min 3 characters, max 20 characters
   * - Description: required, min 3 characters, max 100 characters
   */
  title: z.string().min(3, 'minimum length of title is 3 character').max(20, 'maximum length of character is 20'),
  description: z.string().min(3, 'minimum length of description is 3 character').max(100, 'maximum length of character is 100'),
});

export type TodoSchemaType = z.infer<typeof todoSchema>;
