import {useCardContext} from '../../../context/CardContext';
import {type CardSectionType, type CardMap, variantMap} from '../../../validation/card-information';
import Card from '../Cards/Card';
import {useCardLogic} from '../Cards/Card.logic';
import {Link, useSearchParams} from 'react-router-dom';
import Title from '../../atoms/Title/Title';
import Button from '../../atoms/Button/Button';
import {routes} from '../../../constants/routes';
import {CardGrid} from './styles';
import TitleWrapper from '../../atoms/TitleWrapper/TitleWrapper';
import Heading from '../../atoms/Heading/Heading';
import Section from '../../atoms/Section/Section';

type Props<T extends CardSectionType> = {
	cardType: T;
	title: string;
	subtitle?: string;
	buttonText?: string;
};

export function CardSectionRenderer<T extends CardSectionType>({cardType, title, subtitle, buttonText}: Props<T>) {
	const {cards, loading, error} = useCardContext();
	const sectionCards: CardMap[T] = cards[cardType];
	const {handleClickCard, handleEditCard, handleDeleteCard} = useCardLogic(cardType);

	const [searchParams, setSearchParams] = useSearchParams();
	const isContentPage = searchParams.get('type') === cardType;

	const handleAdd = () => {
		const updatedParams = new URLSearchParams(searchParams);
		updatedParams.set('modal', 'add');
		updatedParams.set('cardType', cardType);
		setSearchParams(updatedParams);
	};

	return (
		<Section>
			{subtitle && <Heading>{subtitle}</Heading>}
			<TitleWrapper variant="section">
				<Title>{title}</Title>
				<div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
					{buttonText && !isContentPage && (
						<Link to={`${routes.content}?type=${cardType}`}>
							<Button>{buttonText}</Button>
						</Link>
					)}
					<Button variant="cta" onClick={handleAdd}>
						+
					</Button>
				</div>
			</TitleWrapper>

			{loading && <p>Loading...</p>}
			{error && <p style={{color: 'red'}}>{error}</p>}

			{!loading && sectionCards.length === 0 && <p style={{color: '#888', fontStyle: 'italic', marginTop: '20px'}}>No cards available.</p>}
			<CardGrid $variant={variantMap[cardType]}>
				{sectionCards.map((card, index) => (
					<Card
						key={index}
						card={card}
						variant={variantMap[cardType]}
						onClick={() => handleClickCard(index)}
						onEdit={() => handleEditCard(index)}
						onDelete={() => handleDeleteCard(index)}
					/>
				))}
			</CardGrid>
		</Section>
	);
}
