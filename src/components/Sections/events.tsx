import styled from 'styled-components';
import {
	Section,
	TitleWrapper,
	SectionHeadingBTn,
	SectionHeading,
	Card,
	CardImage,
	CardFooter,
	CardLabel,
	CardTitle,
	CardDescription,
	CardInfo,
	CardContent,
} from '../../styles/shared';
import {useFetchAndValidateJSON} from '../../hooks/useFetch';
import {EventCardArraySchema, type EventCard} from '../../types/card-information';

const EventsCardGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 30px;

	@media (max-width: 900px) {
		grid-template-columns: 1fr;
	}
`;

const EventsCard = styled(Card)`
	width: 100%;
	height: 360px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const EventsSection = () => {
	const {data: cards, loading, error} = useFetchAndValidateJSON<EventCard[]>('/data/events.json', EventCardArraySchema);
	console.log(cards, loading, error);
	return (
		<Section>
			<TitleWrapper>
				<SectionHeading>Events</SectionHeading>
				<SectionHeadingBTn>See all events</SectionHeadingBTn>
			</TitleWrapper>
			<EventsCardGrid>
				{Array.from({length: 2}).map((_, i) => (
					<EventsCard key={i}>
						<CardImage src="images/grassN.jpeg" alt="GrassN" />
						<CardContent>
							<div style={{display: 'flex', gap: '6px', alignItems: 'center'}}>
								<CardLabel>GN</CardLabel>
								<CardTitle>GrassN</CardTitle>
							</div>
							<CardDescription>Optimal grassland management</CardDescription>
							<CardInfo>Plan compliant fertilization and optimal harvest time for grassland.</CardInfo>
						</CardContent>
						<CardFooter>
							<a href="#">Open GrassN</a>
						</CardFooter>
					</EventsCard>
				))}
			</EventsCardGrid>
		</Section>
	);
};

export default EventsSection;
