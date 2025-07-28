import React from 'react';
import {StyledCardImage, type Variant, type LayoutVariant} from './Image.styles';

export type CardImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
	variant?: Variant;
	layout?: LayoutVariant;
};

const CardImage = ({variant = 'default', layout = 'vertical', ...props}: CardImageProps) => {
	return <StyledCardImage $variant={variant} $layout={layout} {...props} />;
};

export default CardImage;
