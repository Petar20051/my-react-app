import React from 'react';
import {TitleWrappers, type TitleVariant} from './TittleWrapper.styles';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	variant: TitleVariant;
	children: React.ReactNode;
}

const TitleWrapper: React.FC<Props> = ({variant, children, ...rest}) => {
	return (
		<TitleWrappers $variant={variant} {...rest}>
			{children}
		</TitleWrappers>
	);
};

export default TitleWrapper;
