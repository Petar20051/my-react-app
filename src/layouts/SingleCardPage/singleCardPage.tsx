import {useNavigate, useSearchParams} from 'react-router-dom';

import {ContentWrapper, PageWrapper} from '../SIngleSectionPage/singleSectionPage.styles';
import type {CardSectionType} from '../../validation/card-information';
import {useCardContext} from '../../context/CardContext';
import Button from '../../components/atoms/Button/Button';
import Card from '../../components/organisms/Cards/Card';
import Paragraph from '../../components/atoms/Paragraph/Paragraph';

const SingleCardPage = () => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const type = searchParams.get('type') as CardSectionType;
	const id = searchParams.get('id');

	const {cards} = useCardContext();
	const card = type && id ? cards[type]?.[parseInt(id, 10)] : null;

	return (
		<PageWrapper>
			<ContentWrapper>
				<Button variant="cta" onClick={() => navigate(-1)}>
					← Back to the previous page
				</Button>
				{card ? (
					<Card card={card} />
				) : (
					<Paragraph variant="message">Card data not found. Please go back and select a card again.</Paragraph>
				)}
			</ContentWrapper>
		</PageWrapper>
	);
};

export default SingleCardPage;
