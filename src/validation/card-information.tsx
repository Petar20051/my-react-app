import {z} from 'zod';
import type {CardType} from '../context/CardContext';

const BaseCardSchema = z.object({
	title: z.string().optional(),
	description: z.string().optional(),
	linkText: z.string().optional(),
});

const WithVariantSchema = z.object({
	variant: z.enum(['default', 'wide', 'compact', 'reversed']).optional(),
});

export type BaseCard = z.infer<typeof BaseCardSchema>;

const SolutionCardAdditionsSchema = z.object({
	image: z.string().optional(),
	label: z.string().optional(),
	info: z.string().optional(),
});
export const SolutionCardSchema = BaseCardSchema.merge(SolutionCardAdditionsSchema).merge(WithVariantSchema);
export const SolutionCardArraySchema = SolutionCardSchema.array();
export type SolutionCard = z.infer<typeof SolutionCardSchema>;
export type SolutionCardArray = z.infer<typeof SolutionCardArraySchema>;

const FeaturedCardAdditionsSchema = z.object({
	image: z.string().optional(),
	label: z.string().optional(),
	tag: z.string().optional(),
	info: z.string().optional(),
	topics: z.array(z.string()).optional(),
});
export const FeaturedCardSchema = BaseCardSchema.merge(FeaturedCardAdditionsSchema).merge(WithVariantSchema);
export const FeaturedCardArraySchema = FeaturedCardSchema.array();
export type FeaturedCard = z.infer<typeof FeaturedCardSchema>;
export type FeaturedCardArray = z.infer<typeof FeaturedCardArraySchema>;

const EventCardAdditionsSchema = z.object({
	image: z.string().optional(),
	date: z.string().optional(),
});
export const EventCardSchema = BaseCardSchema.merge(EventCardAdditionsSchema).merge(WithVariantSchema);
export const EventCardArraySchema = EventCardSchema.array();
export type EventCard = z.infer<typeof EventCardSchema>;
export type EventCardArray = z.infer<typeof EventCardArraySchema>;

const PodcastCardAdditionsSchema = z.object({
	image: z.string().optional(),
	date: z.string().optional(),
	episode: z.string().optional(),
});
export const PodcastCardSchema = BaseCardSchema.merge(PodcastCardAdditionsSchema).merge(WithVariantSchema);
export const PodcastCardArraySchema = PodcastCardSchema.array();
export type PodcastCard = z.infer<typeof PodcastCardSchema>;
export type PodcastCardArray = z.infer<typeof PodcastCardArraySchema>;

const NewsCardAdditionsSchema = z.object({
	image: z.string().optional(),
	category: z.string().optional(),
	date: z.string().optional(),
});
export const NewsCardSchema = BaseCardSchema.merge(NewsCardAdditionsSchema).merge(WithVariantSchema);
export const NewsCardArraySchema = NewsCardSchema.array();
export type NewsCard = z.infer<typeof NewsCardSchema>;
export type NewsCardArray = z.infer<typeof NewsCardArraySchema>;

export const schemaMap = {
	events: EventCardSchema,
	solutions: SolutionCardSchema,
	news: NewsCardSchema,
	featured: FeaturedCardSchema,
	podcasts: PodcastCardSchema,
} as const;

export type SchemaMap = typeof schemaMap;

export type CardDataFromType<T extends CardType> = z.infer<SchemaMap[T]>;
