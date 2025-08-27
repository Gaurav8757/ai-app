import z from 'zod';

export const validationsInput = z.object({
   prompt: z
      .string()
      .trim()
      .min(1, 'Prompt is required.')
      .max(1000, 'Prompt is too long (max 1000 characters).'),
   conversationId: z.string(), // ✅ corrected name
});
