import styled from 'styled-components';

export type Variant = 'default' | 'event' | 'news' | 'podcast' | 'solution' | 'featured';

const cardVariantStyles: Record<Variant, {minHeight?: string; width?: string; marginBottom?: string}> = {
	default: {
		minHeight: 'auto',
		width: '100%',
		marginBottom: '20px',
	},
	event: {
		minHeight: '485px',
		width: '100%',
		marginBottom: '20px',
	},
	news: {
		minHeight: '100%',
		width: '300px',
		marginBottom: '20px',
	},
	podcast: {
		minHeight: 'auto',
		width: '100%',
		marginBottom: '20px',
	},
	solution: {
		minHeight: '400px',
		width: '100%',
		marginBottom: '0',
	},
	featured: {
		minHeight: 'auto',
		width: '100%',
		marginBottom: '20px',
	},
};

export const CardContainer = styled.article<{$variant: Variant}>`
	display: flex;
	flex-direction: column;
	width: ${({$variant}) => cardVariantStyles[$variant].width};
	min-height: ${({$variant}) => cardVariantStyles[$variant].minHeight};
	border-radius: 10px;
	border: 1px solid rgb(225, 222, 222);
	background-color: white;
	overflow: hidden;
	margin-bottom: ${({$variant}) => cardVariantStyles[$variant].marginBottom};

	${({$variant}) =>
		$variant === 'news' &&
		`
			max-width: 1000px;

			@media (max-width: 1370px) {
				width: 47%;
			}
			@media (max-width: 670px) {
				width: 100%;
			}
		`}

	${({$variant}) =>
		$variant === 'featured' &&
		`
			border-radius: 20px;
			box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
			transition: all 0.3s ease;
			margin: 40px auto;
			max-width: 960px;

			&:hover {
				transform: translateY(-6px);
				box-shadow: 0 24px 48px rgba(0, 0, 0, 0.12);
			}
		`}
`;
