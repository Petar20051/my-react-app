import type {CardSectionType} from '../components/organisms/Cards/Card.static';

export const DEFAULT_IMAGE_URL = '/assets/grassN.jpeg';

export const DEFAULT_DELETE_CONFIRM_MESSAGE = 'Are you sure you want to delete this item?';

export const fieldMap: Record<CardSectionType, string[]> = {
	events: ['title', 'description', 'date', 'image', 'linkText'],
	solutions: ['label', 'title', 'info', 'description', 'image', 'linkText'],
	news: ['title', 'description', 'category', 'date', 'image', 'linkText'],
	featured: ['label', 'title', 'tag', 'info', 'description', 'topics', 'image', 'linkText'],
	podcasts: ['title', 'description', 'date', 'episode', 'image', 'linkText'],
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
