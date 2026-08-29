import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const works = defineCollection({
  // Content Layer API用のローダー（src/content/works 内の .md を取得）
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['language', 'other']),
    pdfUrl: z.string(),
    publishDate: z.coerce.date(),
  }),
});

export const collections = { works };