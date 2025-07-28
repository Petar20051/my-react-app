import React from 'react';
import {
	FeatureContentWrapper,
	PodcastContentWrapper,
	StyledCardContent,
	type Variant,
	type LayoutVariant,
	ImageWrapper,
	ContentWrapper,
} from './CardContentWrapper.styles';

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
	variant?: Variant;
	layout?: LayoutVariant;
	hasImage?: boolean;
	imageNode?: React.ReactNode;
	children: React.ReactNode;
	index?: number;
}

export const CardContentWrapper: React.FC<CardContentProps> = ({
	variant = 'default',
	layout = 'vertical',
	hasImage,
	imageNode,
	children,
	index,
	...rest
}) => {
	const isEven = typeof index === 'number' && index % 2 === 0;
	const finalLayout = variant === 'featured' && isEven ? 'reversed' : layout;

	const content = (
		<StyledCardContent $variant={variant} $layout={finalLayout} {...rest}>
			{children}
		</StyledCardContent>
	);

	switch (variant) {
		case 'podcast':
			return (
				<PodcastContentWrapper hasImage={hasImage}>
					{imageNode}
					{content}
				</PodcastContentWrapper>
			);
		case 'featured':
		case 'preview':
			return (
				<FeatureContentWrapper $layout={layout}>
					{imageNode && <ImageWrapper>{imageNode}</ImageWrapper>}
					<ContentWrapper>
						<StyledCardContent $variant={variant}>{children}</StyledCardContent>
					</ContentWrapper>
				</FeatureContentWrapper>
			);

		default:
			return content;
	}
};
