import {z} from 'zod';

export const variantEnum = z.enum(['default', 'event', 'news', 'podcast', 'solution', 'featured', 'preview']);
export type Variant = z.infer<typeof variantEnum>;

export const CardSchema = z.object({
	title: z.string().optional(),
	description: z.string().optional(),
	linkText: z.string().optional(),
	image: z.string().optional(),
	label: z.string().optional(),
	tag: z.string().optional(),
	info: z.string().optional(),
	topics: z.array(z.string()).optional(),
	date: z.string().optional(),
	episode: z.string().optional(),
	category: z.string().optional(),
	variant: variantEnum.optional(),
	layout: z.enum(['normal', 'compact', 'wide']).optional(),
	orientation: z.enum(['vertical', 'horizontal', 'reversed']).optional(),
});

export const CardArraySchema = CardSchema.array();

export const CardMapSchema = z.object({
	events: CardArraySchema,
	solutions: CardArraySchema,
	news: CardArraySchema,
	featured: CardArraySchema,
	podcasts: CardArraySchema,
});

export type Card = z.infer<typeof CardSchema>;

export type CardSectionType = keyof z.infer<typeof CardMapSchema>;

export type CardMap = {
	[K in CardSectionType]: Card[];
};

export const cardSectionTypes = ['events', 'solutions', 'news', 'featured', 'podcasts'] as const;

export const variantMap: Record<CardSectionType, Variant> = {
	events: 'event',
	solutions: 'solution',
	news: 'news',
	featured: 'featured',
	podcasts: 'podcast',
};
