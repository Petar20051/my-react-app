import React from 'react';
import {StyledCardImage, type Variant} from './Image.styles';

export type CardImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
	variant?: Variant;
};

const CardImage = ({variant = 'default', ...props}: CardImageProps) => {
	return <StyledCardImage $variant={variant} {...props} />;
};

export default CardImage;
