// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define a schema for each collection you'd like to validate.
const rustCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    isShort: z.boolean()
  }),
});
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'rust': rustCollection,
};