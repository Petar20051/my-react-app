import Paragraph from '../../atoms/Paragraph/Paragraph';
import {ContentWrapper} from './CardContentBlock.styles';

type Props = {
	description?: string;
	info?: string;
};

const CardContentBlock = ({description, info}: Props) => {
	return (
		<ContentWrapper>
			{info && <Paragraph variant="description">{info}</Paragraph>}
			{description && <Paragraph variant="info">{description}</Paragraph>}
		</ContentWrapper>
	);
};

export default CardContentBlock;
