import type {ReactNode} from 'react';
import {StyledHeading} from './Heading.styles';

type HeadingProps = {
	children: ReactNode;
};

const Heading = ({children}: HeadingProps) => {
	return <StyledHeading>{children}</StyledHeading>;
};

export default Heading;
