import {z} from 'zod';

const BaseCardSchema = z.object({
	title: z.string(),
	description: z.string(),
	linkText: z.string(),
});

const SolutionCardAdditionsSchema = z.object({
	image: z.string(),
	label: z.string(),
	info: z.string(),
});
export const SolutionCardSchema = BaseCardSchema.merge(SolutionCardAdditionsSchema);
export const SolutionCardArraySchema = SolutionCardSchema.array();
export type SolutionCard = z.infer<typeof SolutionCardSchema>;
export type SolutionCardArray = z.infer<typeof SolutionCardArraySchema>;

const FeaturedCardAdditionsSchema = z.object({
	image: z.string(),
	label: z.string().optional(),
	tag: z.string().optional(),
	info: z.string().optional(),
	topics: z.array(z.string()).optional(),
});
export const FeaturedCardSchema = BaseCardSchema.merge(FeaturedCardAdditionsSchema);
export const FeaturedCardArraySchema = FeaturedCardSchema.array();
export type FeaturedCard = z.infer<typeof FeaturedCardSchema>;
export type FeaturedCardArray = z.infer<typeof FeaturedCardArraySchema>;

const EventCardAdditionsSchema = z.object({
	image: z.string(),
	date: z.string(),
});
export const EventCardSchema = BaseCardSchema.merge(EventCardAdditionsSchema);
export const EventCardArraySchema = EventCardSchema.array();
export type EventCard = z.infer<typeof EventCardSchema>;
export type EventCardArray = z.infer<typeof EventCardArraySchema>;

const PodcastCardAdditionsSchema = z.object({
	image: z.string().optional(),
	date: z.string(),
	episode: z.string(),
});
export const PodcastCardSchema = BaseCardSchema.merge(PodcastCardAdditionsSchema);
export const PodcastCardArraySchema = PodcastCardSchema.array();
export type PodcastCard = z.infer<typeof PodcastCardSchema>;
export type PodcastCardArray = z.infer<typeof PodcastCardArraySchema>;

const NewsCardAdditionsSchema = z.object({
	image: z.string().optional(),
	category: z.string(),
	date: z.string(),
});
export const NewsCardSchema = BaseCardSchema.merge(NewsCardAdditionsSchema);
export const NewsCardArraySchema = NewsCardSchema.array();
export type NewsCard = z.infer<typeof NewsCardSchema>;
export type NewsCardArray = z.infer<typeof NewsCardArraySchema>;
