import {faCalendar, faNewspaper, faPodcast, type IconDefinition} from '@fortawesome/free-solid-svg-icons';

export const iconMap: Record<string, IconDefinition> = {
	events: faCalendar,
	news: faNewspaper,
	podcasts: faPodcast,
};

export const titleMap: Record<string, string> = {
	events: 'Upcoming Events',
	news: 'Latest News',
	podcasts: 'Top Podcasts',
};

export const descMap: Record<string, string> = {
	events: 'Stay informed about the latest events and happenings.',
	news: 'Catch up on news and articles that matter.',
	podcasts: 'Listen to curated podcasts and episodes.',
};
