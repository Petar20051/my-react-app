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
import {NewsCardArraySchema, type NewsCard} from '../../types/card-information';

const NewsCardGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 30px;

	@media (max-width: 1200px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 700px) {
		grid-template-columns: 1fr;
	}
`;

const NewsCard = styled(Card)`
	width: 100%;
	height: 360px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const NewsSection = () => {
	const {data: cards, loading, error} = useFetchAndValidateJSON<NewsCard[]>('/data/news.json', NewsCardArraySchema);
	console.log(cards, loading, error);

	return (
		<Section>
			<TitleWrapper>
				<SectionHeading>News</SectionHeading>
				<SectionHeadingBTn>See all news</SectionHeadingBTn>
			</TitleWrapper>
			<NewsCardGrid>
				{['Potatoes', 'Weather', 'Wheat', 'Dairy'].map((cat, i) => (
					<NewsCard key={i}>
						<CardImage src={`images/news${i + 1}.jpeg`} alt="News" />
						<CardContent>
							<div style={{display: 'flex', gap: '6px', alignItems: 'center'}}>
								<CardLabel>{cat}</CardLabel>
								<CardTitle>News Headline {i + 1}</CardTitle>
							</div>
							<CardDescription>End hunger, achieve food security, and promote sustainable agriculture.</CardDescription>
							<CardInfo>26 June 2023</CardInfo>
						</CardContent>
						<CardFooter>
							<a href="#">Read more</a>
						</CardFooter>
					</NewsCard>
				))}
			</NewsCardGrid>
		</Section>
	);
};

export default NewsSection;
