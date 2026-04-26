import { defineCollection, z } from 'astro:content';

const works = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['academic', 'creative', 'other']),
    pdfUrl: z.string().optional(),
    publishDate: z.date(),
  }),
});

export const collections = { works };