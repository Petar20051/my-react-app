import type {ZodSchema} from 'zod';
import type {CardType} from '../types/cards';

type CardActions = {
	onEdit: () => void;
	onDelete: () => void;
	onClick?: () => void;
};

export type CardSectionConfig<T> = {
	cardType: CardType;
	title: string;
	subtitle?: string;
	headerBtn?: string;
	dataPath: string;
	schema: ZodSchema<T[]>;
	transformInputToCard: (input: Record<string, string>) => T;
	renderCard: (card: T, index: number, actions: CardActions) => React.ReactNode;
	deleteConfirmMessage: string;
	CardGridWrapper: React.ComponentType<{children: React.ReactNode}>;
};
