import type {ReactNode} from 'react';
import {StyledButtonWrapper} from './ButtonWrapper.styles';

type ButtonWrapperProps = {
	children: ReactNode;
};

const ButtonWrapper = ({children}: ButtonWrapperProps) => {
	return <StyledButtonWrapper>{children}</StyledButtonWrapper>;
};

export default ButtonWrapper;
