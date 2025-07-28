import styled from 'styled-components';

export type Variant = 'default' | 'event' | 'news' | 'podcast' | 'solution' | 'featured' | 'preview';
export type LayoutVariant = 'vertical' | 'horizontal' | 'reversed';

interface StyledCardContentProps {
	$variant: Variant;
	$layout?: LayoutVariant;
}

export const StyledCardContent = styled.div<StyledCardContentProps>`
	flex: 1;
	display: flex;
	flex-direction: column;

	padding: ${({$variant}) => (['podcast', 'featured', 'preview'].includes($variant) ? '16px' : '20px')};
	gap: ${({$variant}) => (['podcast', 'featured', 'preview'].includes($variant) ? '3px' : '20px')};
`;

export const FeatureContentWrapper = styled.div<{$layout?: LayoutVariant}>`
	display: flex;
	flex-direction: ${({$layout}) => ($layout === 'reversed' ? 'row-reverse' : $layout === 'horizontal' ? 'row' : 'column')};
	align-items: stretch;
	gap: 16px;
	padding: 16px;
	min-height: 248px;
	flex: 1;

	@media (max-width: 850px) {
		flex-direction: column;
	}
`;

export const PodcastContentWrapper = styled.div<{hasImage?: boolean}>`
	display: grid;
	grid-template-columns: ${({hasImage}) => (hasImage ? '21% 74%' : '96%')};
	align-items: center;
	gap: 16px;
	padding: 10px;
	box-sizing: border-box;
	flex-grow: 1;
	overflow: hidden;

	@media (max-width: 450px) {
		display: flex;
		flex-direction: column;
	}
`;

export const ImageWrapper = styled.div`
	width: 30%;
	min-width: 30%;
	max-width: 30%;

	display: flex;
	align-items: stretch;

	@media (max-width: 768px) {
		width: 100%;
		min-width: 100%;
		max-width: 100%;
	}
`;

export const ContentWrapper = styled.div`
	flex: 1;
	min-width: 0;
	display: flex;
	flex-direction: column;
`;
