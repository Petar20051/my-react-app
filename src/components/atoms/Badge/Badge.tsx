import {StyledBadge} from '../Badge/Badge.styles';

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
	children: React.ReactNode;
};

const Badge = ({children, ...props}: BadgeProps) => {
	return <StyledBadge {...props}>{children}</StyledBadge>;
};

export default Badge;
