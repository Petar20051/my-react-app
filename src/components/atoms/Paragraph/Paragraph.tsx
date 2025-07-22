import {StyledParagraph, type ParagraphVariant} from './Paragraph.styles';

type Props = {
	children?: React.ReactNode;
	variant?: ParagraphVariant;
};

const Typography = ({children, variant = 'description'}: Props) => {
	return <StyledParagraph $variant={variant}>{children}</StyledParagraph>;
};

export default Typography;
