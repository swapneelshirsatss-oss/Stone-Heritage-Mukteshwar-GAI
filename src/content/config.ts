import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    metaTitle: z.string().optional(),
    excerpt: z.string(),
    date: z.string(),
    author: z.string(),
    category: z.string(),
    image: z.string(),
    readTime: z.string(),
  }),
});

export const collections = {
  'blog': blogCollection,
};
