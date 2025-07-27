import styled from 'styled-components';

export type Variant = 'default' | 'event' | 'news' | 'podcast' | 'solution' | 'featured' | 'preview';
export type SizeVariant = 'normal' | 'compact' | 'wide';

const cardVariantStyles: Record<Variant, {minHeight?: string; marginBottom?: string}> = {
	default: {
		minHeight: 'auto',
		marginBottom: '20px',
	},
	event: {
		minHeight: '100%',
		marginBottom: '20px',
	},
	news: {
		minHeight: '100%',
		marginBottom: '20px',
	},
	podcast: {
		minHeight: '232.5px',
		marginBottom: '20px',
	},
	solution: {
		minHeight: '400px',
		marginBottom: '0',
	},
	preview: {
		minHeight: 'auto',
		marginBottom: '20px',
	},
	featured: {
		minHeight: 'auto',
		marginBottom: '20px',
	},
};

const sizeVariantStyles: Record<SizeVariant, string> = {
	normal: '100%',
	compact: '200px',
	wide: '600px',
};

export const CardContainer = styled.article<{
	$variant: Variant;
	$sizeVariant?: SizeVariant;
}>`
	display: flex;
	flex-direction: column;
	width: ${({$sizeVariant = 'normal'}) => sizeVariantStyles[$sizeVariant]};
	min-height: ${({$variant}) => cardVariantStyles[$variant].minHeight};
	border-radius: 10px;
	border: 1px solid rgb(225, 222, 222);
	background-color: white;
	overflow: hidden;
	margin-bottom: ${({$variant}) => cardVariantStyles[$variant].marginBottom};

	${({$variant}) =>
		$variant === 'news' &&
		`
			width: 300px;

			@media (max-width: 1272px) {
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
