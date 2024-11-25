// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

// 2. Define your collection(s)


export const collections = {
	docs: defineCollection({ schema: docsSchema() }),
  };