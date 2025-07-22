import type {ReactNode} from 'react';
import {StyledLabel, type LabelVariant} from './Label.styles';

type LabelProps = {
	children: ReactNode;
	variant?: LabelVariant;
};

const Label = ({children, variant = 'default'}: LabelProps) => {
	return <StyledLabel $variant={variant}>{children}</StyledLabel>;
};

export default Label;
