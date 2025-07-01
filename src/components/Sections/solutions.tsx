import styled from 'styled-components';
import {
	Section,
	SectionTitle,
	SectionHeading,
	Card,
	CardImage,
	CardContent,
	CardLabel,
	CardTitle,
	CardDescription,
	CardInfo,
	CardFooter,
} from '../../styles/shared';

import {useFetchAndValidateJSON} from '../../hooks/useFetch';
import {SolutionCardArraySchema, type SolutionCard} from '../../types/card-information';

const HorizontalScrollGrid = styled.div`
	display: flex;
	gap: 20px;
	overflow-x: auto;
	padding: 10px 0;

	&::-webkit-scrollbar {
		height: 6px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #ccc;
		border-radius: 4px;
	}
`;

const SolutionsSection = () => {
	const {data: cards, loading, error} = useFetchAndValidateJSON<SolutionCard[]>('/data/solutions.json', SolutionCardArraySchema);
	console.log(cards, loading, error);

	return (
		<Section>
			<SectionTitle>VaraPlus Solutions</SectionTitle>
			<SectionHeading>Access our full range of solutions</SectionHeading>

			{loading && <p>Loading...</p>}
			{error && <p style={{color: 'red'}}>{error}</p>}

			{cards && (
				<HorizontalScrollGrid>
					{cards.map((card, index) => (
						<Card key={index}>
							<CardImage src={card.image} alt={card.title} />
							<CardContent>
								<div style={{display: 'flex', gap: '6px', alignItems: 'center'}}>
									<CardLabel>{card.label}</CardLabel>
									<CardTitle>{card.title}</CardTitle>
								</div>
								<CardDescription>{card.info}</CardDescription>
								<CardInfo>{card.description}</CardInfo>
							</CardContent>
							<CardFooter>
								<a href="#">{card.linkText}</a>
							</CardFooter>
						</Card>
					))}
				</HorizontalScrollGrid>
			)}
		</Section>
	);
};

export default SolutionsSection;
