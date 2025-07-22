import type {ReactNode} from 'react';
import {StyledHeading} from './Heading.styles';

type HeadingProps = {
	children: ReactNode;
	as?: 'h1' | 'h2' | 'h3';
};

const Heading = ({children}: HeadingProps) => {
	return <StyledHeading>{children}</StyledHeading>;
};

export default Heading;
