import {
	FeatureContentWrapper,
	FeatureContentWrapperReverse,
	PodcastContentWrapper,
	StyledCardContent,
	type Variant,
} from './CardContentWrapper.styles';

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
	variant?: Variant;
	hasImage?: boolean;
	imageNode?: React.ReactNode;
	children: React.ReactNode;
}

export const CardContentWrapper: React.FC<CardContentProps> = ({variant = 'default', hasImage, imageNode, children, ...rest}) => {
	const content = (
		<StyledCardContent $variant={variant} {...rest}>
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
			return (
				<FeatureContentWrapper>
					{imageNode}
					{content}
				</FeatureContentWrapper>
			);
		case 'featuredReverse':
			return (
				<FeatureContentWrapperReverse>
					{imageNode}
					{content}
				</FeatureContentWrapperReverse>
			);
		default:
			return content;
	}
};
