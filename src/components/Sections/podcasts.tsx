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
import {PodcastCardArraySchema, type PodcastCard} from '../../types/card-information';

const PodcastsCardGrid = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
`;

const PodcastsCard = styled(Card)`
	width: 100%;
	height: 360px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const PodcastsSection = () => {
	const {data: cards, loading, error} = useFetchAndValidateJSON<PodcastCard[]>('/data/podcasts.json', PodcastCardArraySchema);
	console.log(cards, loading, error);

	return (
		<Section>
			<TitleWrapper>
				<SectionHeading>Podcasts</SectionHeading>
				<SectionHeadingBTn>See all podcasts</SectionHeadingBTn>
			</TitleWrapper>
			<PodcastsCardGrid>
				{Array.from({length: 2}).map((_, i) => (
					<PodcastsCard key={i}>
						<CardImage src="images/worker.jpeg" alt="Podcast" />
						<CardContent>
							<div style={{display: 'flex', gap: '6px', alignItems: 'center'}}>
								<CardLabel>EP{i + 1}</CardLabel>
								<CardTitle>Compliance and labor: the take of our expert</CardTitle>
							</div>
							<CardDescription>End hunger, achieve food security, and promote sustainable agriculture.</CardDescription>
							<CardInfo>Episode #{17 - i}</CardInfo>
						</CardContent>
						<CardFooter>
							<a href="#">Listen</a>
						</CardFooter>
					</PodcastsCard>
				))}
			</PodcastsCardGrid>
		</Section>
	);
};

export default PodcastsSection;
