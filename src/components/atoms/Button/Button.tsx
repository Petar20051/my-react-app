import type {AnchorHTMLAttributes, ReactNode} from 'react';
import {StyledButton, type ButtonVariant} from './Button.styles';

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
	children: ReactNode;
	variant?: ButtonVariant;
};

const Button = ({children, variant = 'sectionHeading', ...props}: ButtonProps) => {
	return (
		<StyledButton $variant={variant} {...props}>
			{children}
		</StyledButton>
	);
};

export default Button;
