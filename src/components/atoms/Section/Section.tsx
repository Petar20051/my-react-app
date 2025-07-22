import {StyledSection} from './Section.styles';

type SectionProps = React.HTMLAttributes<HTMLElement> & {
	children: React.ReactNode;
};

const Section = ({children, ...props}: SectionProps) => {
	return <StyledSection {...props}>{children}</StyledSection>;
};

export default Section;
