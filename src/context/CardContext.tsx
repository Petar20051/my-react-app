import {createContext, useContext, useEffect, useState, type PropsWithChildren} from 'react';
import {useFetchAndValidateJSON} from '../hooks/useFetch';
import {DATA_PATHS} from '../constants/paths';
import {
	EventCardArraySchema,
	SolutionCardArraySchema,
	NewsCardArraySchema,
	FeaturedCardArraySchema,
	PodcastCardArraySchema,
	type EventCard,
	type SolutionCard,
	type NewsCard,
	type FeaturedCard,
	type PodcastCard,
} from '../validation/card-information';

export type CardType = keyof CardMap;

type CardMap = {
	events: EventCard[];
	solutions: SolutionCard[];
	news: NewsCard[];
	featured: FeaturedCard[];
	podcasts: PodcastCard[];
};

type CardContextType = {
	cards: CardMap;
	setCards: {
		[K in keyof CardMap]: (value: CardMap[K]) => void;
	};
	loading: boolean;
	error: string | null;
};

const CardContext = createContext<CardContextType | null>(null);

export const CardProvider = ({children}: PropsWithChildren) => {
	const fetchConfigs = [
		{key: 'events', path: DATA_PATHS.EVENTS, schema: EventCardArraySchema},
		{key: 'solutions', path: DATA_PATHS.SOLUTIONS, schema: SolutionCardArraySchema},
		{key: 'news', path: DATA_PATHS.NEWS, schema: NewsCardArraySchema},
		{key: 'featured', path: DATA_PATHS.FEATURED, schema: FeaturedCardArraySchema},
		{key: 'podcasts', path: DATA_PATHS.PODCASTS, schema: PodcastCardArraySchema},
	] as const;

	const fetches = fetchConfigs.map((cfg) => useFetchAndValidateJSON(cfg.path, cfg.schema));

	const [cards, setCardsState] = useState<CardMap>({
		events: [],
		solutions: [],
		news: [],
		featured: [],
		podcasts: [],
	});

	useEffect(
		() => {
			setCardsState((prev) => {
				const updated = {...prev};
				fetchConfigs.forEach((cfg, i) => {
					const data = fetches[i].data;
					if (data) updated[cfg.key] = data;
				});
				return updated;
			});
		},
		fetches.map((f) => f.data)
	);

	const loading = fetches.some((f) => f.loading);
	const error = fetches.find((f) => f.error)?.error ?? null;

	const setCards = Object.fromEntries(
		Object.keys(cards).map((key) => [key, (value: any) => setCardsState((prev) => ({...prev, [key]: value}))])
	) as CardContextType['setCards'];

	const contextValue: CardContextType = {
		cards,
		setCards,
		loading,
		error,
	};

	return <CardContext.Provider value={contextValue}>{children}</CardContext.Provider>;
};

export const useCardContext = () => {
	const context = useContext(CardContext);
	if (!context) throw new Error('useCardContext must be used within a CardProvider');
	return context;
};
