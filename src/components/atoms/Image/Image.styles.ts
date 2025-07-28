import styled from 'styled-components';

export type Variant = 'default' | 'event' | 'news' | 'podcast' | 'solution' | 'featured' | 'preview';
export type LayoutVariant = 'vertical' | 'horizontal' | 'reversed';

const variantHeights: Record<Variant, string> = {
	default: '120px',
	event: '262px',
	news: '200px',
	podcast: '120px',
	solution: '120px',
	featured: '160px',
	preview: '150px',
};

const variantBorderRadius: Record<Variant, string> = {
	default: '10px 10px 0 0',
	event: '10px 10px 0 0',
	news: '10px 10px 0 0',
	podcast: '10px',
	solution: '10px 10px 0 0',
	featured: '10px',
	preview: '10px',
};

export const StyledCardImage = styled.img<{
	$variant: Variant;
	$layout?: LayoutVariant;
}>`
	object-fit: cover;
	border-radius: ${({$variant}) => variantBorderRadius[$variant]};
	width: ${({$layout}) => ($layout === 'horizontal' || $layout === 'reversed' ? '100%' : '100%')};
	height: ${({$layout, $variant}) => ($layout === 'horizontal' || $layout === 'reversed' ? 'auto' : variantHeights[$variant])};

	max-height: 100%;
	display: block;
`;
