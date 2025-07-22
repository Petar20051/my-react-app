import React from 'react';
import {CardContainer as StyledCardContainer, type Variant} from './CardContainer.styles';

type CardProps = React.HTMLAttributes<HTMLElement> & {
	children: React.ReactNode;
	variant?: Variant;
};

export const CardContainer = ({children, variant = 'default', ...rest}: CardProps) => {
	return (
		<StyledCardContainer $variant={variant} {...rest}>
			{children}
		</StyledCardContainer>
	);
};
