import {StyledTitle} from './Title.styles';

type TitleProps = React.HTMLAttributes<HTMLHeadingElement>;

const Title = ({children, ...props}: TitleProps) => {
	return <StyledTitle {...props}>{children}</StyledTitle>;
};

export default Title;
