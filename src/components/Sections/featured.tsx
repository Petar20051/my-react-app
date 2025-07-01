import {
	Section,
	SectionTitle,
	SectionHeading,
	CardImage,
	CardContent,
	CardLabel,
	CardTitle,
	CardDescription,
	CardInfo,
	CardFooter,
} from '../../styles/shared';
import styled from 'styled-components';
import {FeaturedCardArraySchema, type FeaturedCard} from '../../types/card-information';
import {useFetchAndValidateJSON} from '../../hooks/useFetch';

const FeaturedCardGrid = styled.div`
	display: grid;
	grid-template-columns: 70% 30%;
	gap: 20px;

	@media (max-width: 900px) {
		grid-template-columns: 1fr;
	}
`;

const FeaturedCard = styled.article`
	background-color: white;
	border-radius: 10px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
	padding: 16px;
	display: flex;
	flex-direction: column;
	height: 100%;
`;

const FeaturedSection = () => {
	const {data: cards, loading, error} = useFetchAndValidateJSON<FeaturedCard[]>('/data/featured.json', FeaturedCardArraySchema);
	console.log(cards, loading, error);
	return (
		<Section>
			<SectionTitle>Featured Solution</SectionTitle>
			<SectionHeading>Optimize your grassland</SectionHeading>

			<FeaturedCardGrid>
				<FeaturedCard>
					<CardImage src="images/grassNsoftware.jpeg" alt="GrassN" />
					<CardContent>
						<div style={{display: 'flex', gap: '6px', alignItems: 'center'}}>
							<CardLabel>GN</CardLabel>
							<CardTitle>GrassN</CardTitle>
						</div>
						<CardDescription>Optimal grassland management</CardDescription>
						<CardInfo>Plan compliant fertilization and optimal harvest time for grassland.</CardInfo>
					</CardContent>
					<CardFooter>
						<a href="#">Discover</a>
					</CardFooter>
				</FeaturedCard>

				<FeaturedCard>
					<CardImage src="images/quote.jpeg" alt="Quote" />
					<CardContent>
						<CardTitle>Request a quote</CardTitle>
						<CardDescription>Explore our product range and receive an offer from distributors near you.</CardDescription>
					</CardContent>
					<CardFooter>
						<a href="#">Request a quote</a>
					</CardFooter>
				</FeaturedCard>
			</FeaturedCardGrid>
		</Section>
	);
};

export default FeaturedSection;
