import { z } from 'zod';

export const todoSchema = z.object({
  /**
   * @todo: Add the validation for the title and the description
   * - Title: required, min 3 characters, max 20 characters
   * - Description: required, min 3 characters, max 100 characters
   */
  title: z.string(),
  description: z.string(),
});

export type TodoSchemaType = z.infer<typeof todoSchema>;
