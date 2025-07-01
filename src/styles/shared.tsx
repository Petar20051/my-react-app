import styled from 'styled-components';

export const SectionWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 5%;
	flex: 1 1;
`;

export const Section = styled.section`
	margin-bottom: 60px;
	width: 100%;
`;
export const TitleWrapper = styled.div`
	display: flex;
	flex-direction: row;
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
	margin-bottom: 20px;
	margin-top: 0px;
`;

export const SectionHeadingBTn = styled.a`
	font-size: 14px;
	font-weight: bolder;
	color: lightskyblue;
	border: 1px solid lightskyblue;
	border-radius: 5px;
	padding: 12px 20px;
`;

export const CardGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	justify-content: space-between;

	@media (max-width: 1380px) {
		justify-content: center;
	}
`;

export const Card = styled.article`
	background-color: white;
	border-radius: 10px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
	overflow: hidden;
	display: flex;
	flex-direction: column;
	padding: 16px;
	width: 210px;
	min-height: 290px;

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const CardImage = styled.img`
	width: 100%;
	height: 90px;
	object-fit: cover;
	border-radius: 10px 10px 0 0;
`;

export const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	flex-grow: 1;
	padding-top: 10px;
`;

export const CardTitle = styled.h4`
	font-size: 16px;
	font-weight: bold;
`;

export const CardLabel = styled.span`
	font-size: 11px;
	font-weight: bold;
	color: #222294;
	background-color: #f1f3f9;
	border: 1px solid #d0d6e1;
	padding: 2px 6px;
	border-radius: 4px;
`;

export const CardDescription = styled.p`
	font-size: 13px;
	font-weight: 500;
	color: #333;
`;

export const CardInfo = styled.p`
	font-size: 12px;
	color: #666;
	line-height: 1.5;
	flex-grow: 1;
`;

export const CardFooter = styled.div`
	padding-top: 10px;
	display: flex;
	justify-content: flex-end;

	a {
		font-size: 13px;
		font-weight: bold;
		color: #0060c9;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`;
