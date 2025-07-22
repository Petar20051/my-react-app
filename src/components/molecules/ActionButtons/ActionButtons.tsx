import Button from '../../atoms/Button/Button';
import {ActionWrapper} from './ActionButtons.styles';

type Props = {
	onEdit?: () => void;
	onDelete?: () => void;
};

const CardActions = ({onEdit, onDelete}: Props) => {
	return (
		<ActionWrapper>
			<Button variant="cta" onClick={onEdit}>
				✏️
			</Button>
			<Button variant="cta" onClick={onDelete}>
				🗑️
			</Button>
		</ActionWrapper>
	);
};

export default CardActions;
