import {StyledGrid} from './Grid.styles';

type GridProps = React.HTMLAttributes<HTMLDivElement> & {
	children: React.ReactNode;
};

const Grid = ({children, ...props}: GridProps) => {
	return <StyledGrid {...props}>{children}</StyledGrid>;
};

export default Grid;
