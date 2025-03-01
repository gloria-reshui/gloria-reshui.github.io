import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().optional(),
			readingTime: z.string().optional(),
			pubDate: z.date(),
			update: z.date().optional(),
			heroImage: image().optional(),
			heroAlt: z.string().optional(),
		}),
});

const projectCollection = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().optional(),
			pubDate: z.date(),
			update: z.date().optional(),
			tags: z.array(z.string()),
			heroImage: image().optional(),
			heroAlt: z.string().optional(),
			readingTime: z.string().optional(),
		}),
});

export const collections = { blog: blogCollection, easy: blogCollection, projects: projectCollection };
