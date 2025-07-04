import type {EventCard, FeaturedCard, NewsCard, PodcastCard, SolutionCard} from '../validation/card-information';

export const transformInputToSolutionCard = (input: Record<string, string>): SolutionCard => ({
	title: input.title || '',
	description: input.description || '',
	linkText: input.linkText || '',
	image: input.image || '',
	label: input.label || '',
	info: input.info || '',
});

export const transformInputToPodcastCard = (input: Record<string, string>): PodcastCard => ({
	title: input.title || '',
	description: input.description || '',
	linkText: input.linkText || '',
	image: input.image || '',
	episode: input.episode || '',
	date: input.date || '',
});

export const transformInputToNewsCard = (input: Record<string, string>): NewsCard => ({
	title: input.title || '',
	description: input.description || '',
	linkText: input.linkText || '',
	image: input.image || '',
	category: input.category || '',
	date: input.date || '',
});

type InputWithFlexibleTopics = {
	title?: string;
	description?: string;
	linkText?: string;
	image?: string;
	label?: string;
	info?: string;
	tag?: string;
	topics?: string | string[] | null;
};

export const transformInputToFeaturedCard = (input: InputWithFlexibleTopics): FeaturedCard => ({
	title: input.title || '',
	description: input.description || '',
	linkText: input.linkText || '',
	image: input.image || '',
	label: input.label || '',
	info: input.info || '',
	tag: input.tag || '',
	topics:
		typeof input.topics === 'string'
			? input.topics.split(',').map((t) => t.trim())
			: Array.isArray(input.topics)
			? input.topics.map((t: string) => t.trim())
			: undefined,
});

export const transformInputToEventCard = (input: Record<string, string>): EventCard => ({
	title: input.title || '',
	description: input.description || '',
	linkText: input.linkText || '',
	image: input.image || '',
	date: input.date || '',
});
