import styled from 'styled-components';
import {Card, CardContent, CardDescription, CardFooter, CardImage, CardInfo, CardLabel} from '../../styles/sections.styles';

export const StyledCard = styled(Card)`
	border-radius: 20px;
	box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
	transition: all 0.3s ease;
	margin: 40px auto;
	max-width: 960px;

	&:hover {
		transform: translateY(-6px);
		box-shadow: 0 24px 48px rgba(0, 0, 0, 0.12);
	}
`;

export const StyledCardImage = styled(CardImage)`
	height: 380px;
	object-fit: cover;
	border-radius: 20px 20px 0 0;
`;

export const StyledCardContent = styled(CardContent)`
	padding: 32px;
	gap: 20px;
	display: flex;
	flex-direction: column;
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

export const StyledCardFooter = styled(CardFooter)`
	justify-content: flex-start;
	padding-top: 20px;
	gap: 20px;

	a {
		font-size: 14px;
		color: #2563eb;
	}
`;
