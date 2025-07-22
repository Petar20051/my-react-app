import styled from 'styled-components';

export type Variant = 'default' | 'event' | 'news' | 'podcast' | 'solution' | 'featured' | 'featuredReverse';

interface StyledCardContentProps {
	$variant: Variant;
}

export const StyledCardContent = styled.div<StyledCardContentProps>`
	flex: 1;
	display: flex;
	flex-direction: column;

	padding: ${({$variant}) => {
		switch ($variant) {
			case 'podcast':
			case 'featuredReverse':
				return '0';
			case 'featured':
				return '16px';
			default:
				return '20px';
		}
	}};

	gap: ${({$variant}) => ($variant === 'featured' || 'podcast' ? '3px' : '20px')};
`;

export const FeatureContentWrapper = styled.div`
	display: grid;
	grid-template-columns: 30% 70%;
	padding: 16px;
	min-height: 248px;

	@media (max-width: 450px) {
		display: flex;
		flex-direction: column;
		flex: 1;
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

export const FeatureContentWrapperReverse = styled.div`
	display: grid;
	grid-template-columns: 50% 50%;
	padding: 16px;
	gap: 10px;
	min-height: 200px;
	flex: 1;
	@media (max-width: 450px) {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
`;
