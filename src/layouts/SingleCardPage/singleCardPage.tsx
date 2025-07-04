import {useEffect, useState} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import {PageWrapper, ContentWrapper} from '../SIngleSectionPage/singleSectionPage.styles';
import SingleCard from '../../components/SingleCard/singlecard';
import {CTAButton} from '../../styles/sections.styles';
import {ErrorText} from '../../components/Auth/AuthStyles';
import type {UniversalCard} from '../../types/cards';

const SingleCardPage = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [card, setCard] = useState<UniversalCard | null>(null);

	useEffect(() => {
		if (location.state?.card) {
			setCard(location.state.card);
		}
	}, [location.state]);

	return (
		<PageWrapper>
			<ContentWrapper>
				<CTAButton onClick={() => navigate(-1)}>← Back to the previous page</CTAButton>
				{card && <SingleCard card={card} />}
				{!card && <ErrorText>Card data not found. Please go back and select a card again.</ErrorText>}
			</ContentWrapper>
		</PageWrapper>
	);
};

export default SingleCardPage;
