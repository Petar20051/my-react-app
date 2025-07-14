import {Link, useNavigate, useSearchParams, useLocation} from 'react-router-dom';
import {Section, SectionTitleWrapper, ButtonWrapper} from '../../atoms/Layout';
import {SectionHeading, SectionTitle} from '../../atoms/Typography';
import {CTAButton, SectionHeadingBTn} from '../../atoms/Button';
import {useCardContext} from '../../../context/CardContext';
import type {CardType} from '../../../context/CardContext';
import type {CardDataFromType} from '../../../validation/card-information';

type Props<T extends CardType> = {
	cardType: T;
	title: string;
	subtitle?: string;
	headerBtn?: string;
	deleteConfirmMessage: string;
	CardGridWrapper: React.ComponentType<{children: React.ReactNode}>;
	CardComponent: React.FC<{
		card: CardDataFromType<T>;
		index: number;
	}>;
};

export function CardSectionRenderer<T extends CardType>(config: Props<T>) {
	const {cards, loading, error} = useCardContext();
	const navigate = useNavigate();
	const location = useLocation();
	const [searchParams] = useSearchParams();
	const type = searchParams.get('type');

	const sectionCards = cards[config.cardType] as CardDataFromType<T>[];
	const {CardGridWrapper: Grid, CardComponent} = config;

	const openAddModal = () => {
		const params = new URLSearchParams(location.search);
		params.set('modal', 'add');
		params.set('cardType', config.cardType);
		navigate(`${location.pathname}?${params.toString()}`, {replace: true});
	};

	return (
		<Section>
			<SectionTitle>{config.subtitle}</SectionTitle>
			<SectionTitleWrapper>
				<SectionHeading>{config.title}</SectionHeading>
				<ButtonWrapper>
					{!type && config.headerBtn && (
						<Link to={`/content?type=${config.cardType}`}>
							<SectionHeadingBTn>{config.headerBtn}</SectionHeadingBTn>
						</Link>
					)}
					<CTAButton onClick={openAddModal}>➕</CTAButton>
				</ButtonWrapper>
			</SectionTitleWrapper>

			{loading && <p>Loading...</p>}
			{error && <p style={{color: 'red'}}>{error}</p>}

			{!loading && sectionCards.length === 0 && (
				<p style={{color: '#888', fontStyle: 'italic', marginTop: '20px'}}>No cards available for this section.</p>
			)}

			{sectionCards.length > 0 && (
				<Grid>
					{sectionCards.map((card, index) => (
						<CardComponent key={index} card={card} index={index} />
					))}
				</Grid>
			)}
		</Section>
	);
}
