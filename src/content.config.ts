// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';
import { docsLoader } from "@astrojs/starlight/loaders";
import { blogSchema } from 'starlight-blog/schema'

// 2. Define your collection(s)


export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema({ extend: (context) => blogSchema(context) }) }),
};