import {StyledTag} from './Tag.styles';

type TagProps = React.HTMLAttributes<HTMLSpanElement>;

const Tag = ({children, ...props}: TagProps) => {
	return <StyledTag {...props}>{children}</StyledTag>;
};

export default Tag;
