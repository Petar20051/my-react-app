import styled from 'styled-components';

export type Variant = 'default' | 'event' | 'news' | 'podcast' | 'solution' | 'featured';

const variantHeights: Record<Variant, string> = {
	default: '120px',
	event: '225px',
	news: '200px',
	podcast: '120px',
	solution: '120px',
	featured: '160px',
};

const variantBorderRadius: Record<Variant, string> = {
	default: '10px 10px 0 0',
	event: '10px 10px 0 0',
	news: '10px 10px 0 0',
	podcast: '10px',
	solution: '10px 10px 0 0',
	featured: '10px',
};

export const StyledCardImage = styled.img<{$variant: Variant}>`
	width: 100%;
	object-fit: cover;
	height: ${({$variant}) => variantHeights[$variant]};
	border-radius: ${({$variant}) => variantBorderRadius[$variant]};
`;
