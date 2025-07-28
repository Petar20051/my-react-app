import React from 'react';
import {CardContainer as StyledCardContainer, type Variant, type SizeVariant} from './CardContainer.styles';

type CardProps = React.HTMLAttributes<HTMLElement> & {
	children: React.ReactNode;
	variant?: Variant;
	sizeVariant?: SizeVariant;
};

export const CardContainer = ({children, variant = 'default', sizeVariant = 'normal', ...rest}: CardProps) => {
	return (
		<StyledCardContainer $variant={variant} $sizeVariant={sizeVariant} {...rest}>
			{children}
		</StyledCardContainer>
	);
};
