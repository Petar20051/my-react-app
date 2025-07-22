import {createContext, useContext, useEffect, useState, type PropsWithChildren} from 'react';
import {useFetchAndValidateJSON} from '../hooks/useFetch';
import {DATA_PATHS} from '../constants/dataPaths';
import {CardMapSchema, type CardMap, type CardSectionType} from '../validation/card-information';

export type CardContextType = {
	cards: CardMap;
	setCards: <K extends CardSectionType>(type: K, value: CardMap[K]) => void;
	loading: boolean;
	error: string | null;
};

const CardContext = createContext<CardContextType | null>(null);

export const CardProvider = ({children}: PropsWithChildren) => {
	const {data, loading, error} = useFetchAndValidateJSON(DATA_PATHS.cards, CardMapSchema);

	const initialCardState: CardMap = {
		events: [],
		solutions: [],
		news: [],
		featured: [],
		podcasts: [],
	};

	const [cards, setCardsState] = useState<CardMap>(initialCardState);

	useEffect(() => {
		if (data) {
			setCardsState(data);
		}
	}, [data]);

	const setCards = <K extends CardSectionType>(type: K, value: CardMap[K]) => {
		setCardsState((prev) => ({
			...prev,
			[type]: value,
		}));
	};

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
	if (!context) {
		throw new Error('useCardContext must be used within a CardProvider');
	}
	return context;
};
