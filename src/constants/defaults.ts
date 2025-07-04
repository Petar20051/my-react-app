import type {CardType} from '../types/cards';

export const DEFAULT_IMAGE_URL = 'src/assets/grassN.jpeg';

export const DEFAULT_DELETE_CONFIRM_MESSAGE = 'Are you sure you want to delete this item?';

export const fieldMap: Record<CardType, string[]> = {
	solutions: ['title', 'description', 'linkText', 'image', 'label', 'info'],
	featured: ['title', 'description', 'linkText', 'image', 'label', 'tag', 'info', 'topics'],
	events: ['title', 'description', 'linkText', 'image', 'date'],
	podcasts: ['title', 'description', 'linkText', 'image', 'date', 'episode'],
	news: ['title', 'description', 'linkText', 'image', 'category', 'date'],
};

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
