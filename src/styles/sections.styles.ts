import styled from 'styled-components';

export const Section = styled.section`
	margin-bottom: 60px;
	width: 100%;

	@media (max-width: 400px) {
		width: auto;
	}
`;

export const TitleWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
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

export const SectionTitleWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

export const SectionHeadingBTn = styled.a`
	font-size: 14px;
	font-weight: bold;
	color: lightskyblue;
	border: 1px solid lightskyblue;
	border-radius: 5px;
	padding: 12px 20px;
	cursor: pointer;
	text-decoration: none;

	&:hover {
		background-color: rgba(135, 206, 250, 0.1);
	}
`;

export const CardGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

export const Card = styled.article`
	display: flex;
	flex-direction: column;
	width: 100%;
	border-radius: 10px;
	border: 1px solid rgb(225, 222, 222);
	background-color: white;
	overflow: hidden;
	margin-bottom: 20px;
`;

export const CardImage = styled.img`
	width: 100%;
	height: 120px;
	object-fit: cover;
	border-radius: 10px 10px 0 0;
`;

export const CardContent = styled.div`
	flex: 1;
	padding: 20px;
	display: flex;
	flex-direction: column;
`;

export const CardTitle = styled.h2`
	font-size: 20px;
	margin: 0;
	word-wrap: normal;
	flex: 1;
`;

export const CardLabel = styled.span`
	font-size: 16px;
	font-weight: bold;
	color: #222294;
	background-color: #f1f3f9;
	border: 1px solid #d0d6e1;
	padding: 4px 6px;
	border-radius: 4px;
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

export const CardFooter = styled.div`
	padding: 26px;
	display: flex;
	justify-content: flex-end;
	border-top: 1px solid rgba(0, 0, 0, 0.2);

	a {
		font-size: 14px;
		font-weight: bold;
		color: #0060c9;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`;

export const CTAButton = styled.a`
	background-color: transparent;
	border: none;
	cursor: pointer;
	padding: 0;
	margin: 0;
`;

export const CardDate = styled.p`
	font-size: 14px;
	opacity: 0.6;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 12px;
	padding-right: 13px;
`;

export const ActionWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 0;
`;
