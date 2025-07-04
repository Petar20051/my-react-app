import type {ReactNode} from 'react';
import type {ZodSchema} from 'zod';
import type {CardType} from './cards';
import type {User} from './auth';
import type {LoginData, SignUpData} from '../validation/Auth';

export type RouteGuardProps = {
	children: ReactNode;
	allowIfAuthenticated: boolean;
	redirectTo: string;
};

export type AuthFormProps<T> = {
	title: string;
	switchText: string;
	switchLink: string;
	switchLinkText: string;
	initialData: T;
	schema: ZodSchema<T>;
	onSubmit: (data: T) => boolean | void;
	fields: {name: keyof T; type: string; placeholder: string}[];
};

export type ConfirmDialogProps = {
	message: string;
	visible: boolean;
	onConfirm: () => void;
	onCancel: () => void;
};

export type ModalFormProps = {
	mode: 'add' | 'edit';
	cardType: CardType;
	initialData?: Record<string, string>;
	onSubmit: (card: Record<string, string>) => void;
	onClose: () => void;
};

export type NavigationProps = {
	toggleSidebar: () => void;
	menuRef: React.RefObject<HTMLDivElement>;
};

export type SidebarProps = {
	isOpen: boolean;
	closeSidebar: () => void;
	ignoreRef?: React.RefObject<HTMLElement>;
};

export type CardManagerReturn<T> = {
	cards: T[];
	editingIndex: number | null;
	startEditing: (index: number) => void;
	cancelEditing: () => void;
	addCard: (card: T) => void;
	editCard: (updatedCard: T) => void;
	deleteCard: (index: number) => void;
};

export type AuthContextType = {
	user: User | null;
	authReady: boolean;
	login: (data: LoginData) => void;
	logout: () => void;
	signup: (data: SignUpData) => void;
};

export type UseSidebarLogicProps = {
	isOpen: boolean;
	closeSidebar: () => void;
	ignoreRef?: React.RefObject<HTMLElement>;
};
