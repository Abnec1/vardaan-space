import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			images: z.array(image()).optional(),
		}),
});

const gallery = defineCollection({
	loader: glob({ base: './src/content/gallery', pattern: '**/*.md' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().max(200),
			captureDate: z.coerce.date(),
			location: z.string().optional(),
			equipment: z.string().optional(),
			image: image(),
			featured: z.boolean().default(false),
		}),
});

export const collections = { blog, gallery };
