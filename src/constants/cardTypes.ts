export const CARD_TYPE = {
	solutions: 'solutions',
	featured: 'featured',
	events: 'events',
	podcasts: 'podcasts',
	news: 'news',
} as const;

export type CardType = keyof typeof CARD_TYPE;
