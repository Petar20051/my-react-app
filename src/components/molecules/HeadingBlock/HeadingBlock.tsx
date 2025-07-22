import Badge from '../../atoms/Badge/Badge';
import Label from '../../atoms/Label/Label';
import Title from '../../atoms/Title/Title';
import {StyledWrapper} from './HeadingBlock.styles';

type Props = {
	label?: string;
	title?: string;
	tag?: string;
};

const HeadingBlock = ({label, title, tag}: Props) => {
	return (
		<StyledWrapper>
			{label && <Badge>{label}</Badge>}
			{title && <Title>{title}</Title>}
			{tag && <Label>{tag}</Label>}
		</StyledWrapper>
	);
};

export default HeadingBlock;
