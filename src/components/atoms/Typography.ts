import styled from 'styled-components';

export const CardLabel = styled.span`
	font-size: 16px;
	font-weight: bold;
	color: #222294;
	background-color: #f1f3f9;
	border: 1px solid #d0d6e1;
	padding: 4px 6px;
	border-radius: 4px;
`;

export const CardTitle = styled.h2`
	font-size: 20px;
	margin: 0;
	word-wrap: normal;
	flex: 1;
`;

export const CardDescription = styled.p`
	font-size: 19px;
	color: #333;
	opacity: 0.8;
	margin: 0;
`;

export const CardInfo = styled.p`
	font-size: 17px;
	color: #666;
	opacity: 0.6;
	margin: 0;
	word-wrap: normal;
`;

export const CardDate = styled.p`
	font-size: 14px;
	opacity: 0.6;
`;

export const SectionTitle = styled.p`
	color: #666;
	text-transform: uppercase;
	font-size: 14px;
	font-weight: bold;
	margin-bottom: 10px;
`;

export const SectionHeading = styled.h2`
	font-size: 24px;
	font-weight: bold;
	margin: 0 0 20px 0;
`;

export const Message = styled.h2`
	margin-top: 30px;
	font-size: 24px;
	color: #333;
`;

export const HomeLink = styled.a`
	display: inline-block;
	margin-top: 20px;
	text-decoration: none;
	color: white;
	background-color: #007bff;
	padding: 10px 20px;
	border-radius: 4px;

	&:hover {
		background-color: #0056b3;
	}
`;

export const FeaturedTag = styled(CardLabel)`
	background-color: lightblue;
	color: blue;
`;

export const FeaturedTopic = styled(CardLabel)`
	padding: 5px 20px;
	background-color: white;
	color: gray;
	border-radius: 30px;
	font-size: 14px;
`;

export const FeaturedInfo = styled.div`
	word-wrap: normal;
	opacity: 0.6;
	margin-bottom: 10px;
`;

export const FeaturedDescription = styled.div`
	height: 25px;
	letter-spacing: 1px;
	word-wrap: normal;
	@media (max-width: 450px) {
		flex: 1;
	}
`;
export const SolutionCardDescription = styled(CardDescription)`
	height: 38%;
`;

export const HeroTitle = styled.h1`
	margin-bottom: 10px;
`;

export const HeroDescription = styled.p`
	font-size: 16px;
	font-weight: 300;
	max-width: 70%;
	line-height: 1.6;
	letter-spacing: 1.2px;

	@media (max-width: 768px) {
		max-width: 100%;
	}
`;

export const BadgeRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	font-weight: 600;
	text-transform: uppercase;
	font-size: 11px;
	margin-bottom: 12px;
`;

export const Badge = styled(CardLabel)`
	background: linear-gradient(to right, #eef4ff, #f4f8ff);
	color: #1e3a8a;
	padding: 6px 14px;
	border-radius: 999px;
	border: none;
`;

export const Subtitle = styled(CardInfo)`
	font-size: 16px;
	color: #6b7280;
	font-style: italic;
	margin-top: -4px;
`;

export const Description = styled(CardDescription)`
	font-size: 17px;
	line-height: 1.75;
	color: #374151;
`;

export const Metadata = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 16px;
	color: #6b7280;
	font-size: 14px;
	margin-top: 20px;
`;

export const TopicTag = styled.span`
	background: #f3f4f6;
	color: #1f2937;
	padding: 6px 12px;
	border-radius: 8px;
	font-size: 13px;
	font-weight: 500;
	border: 1px solid #e5e7eb;

	&:hover {
		background: #e5e7eb;
	}
`;
