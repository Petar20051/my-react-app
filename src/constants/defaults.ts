import type {CardSectionType} from '../validation/card-information';

export const DEFAULT_IMAGE_URL = '/assets/grassN.jpeg';

export const DEFAULT_DELETE_CONFIRM_MESSAGE = 'Are you sure you want to delete this item?';

export const fieldMap: Record<CardSectionType, string[]> = {
	events: ['title', 'description', 'date', 'image', 'linkText', 'variant'],
	solutions: ['label', 'title', 'info', 'description', 'image', 'linkText', 'variant'],
	news: ['title', 'description', 'category', 'date', 'image', 'linkText', 'variant'],
	featured: ['label', 'title', 'tag', 'info', 'description', 'topics', 'image', 'linkText', 'variant'],
	podcasts: ['title', 'description', 'date', 'episode', 'image', 'linkText', 'variant'],
} as const;

export const FIELD_MAX_LENGTHS = [
	{field: 'title', maxLength: 60},
	{field: 'description', maxLength: 150},
	{field: 'linkText', maxLength: 20},
	{field: 'image', maxLength: 40},
	{field: 'label', maxLength: 20},
	{field: 'tag', maxLength: 20},
	{field: 'info', maxLength: 150},
	{field: 'date', maxLength: 20},
	{field: 'episode', maxLength: 20},
	{field: 'category', maxLength: 20},
	{field: 'topics', maxLength: 100},
];
