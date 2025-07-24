import Button from '../../atoms/Button/Button';
import {CardFooter} from './CardFooter.styles';

type Props = {
	linkText?: string;
	onClick?: () => void;
};

const CardFooterLink = ({linkText, onClick}: Props) => {
	if (!linkText) return null;

	return (
		<CardFooter>
			<Button variant="cta" onClick={onClick}>
				{linkText}
			</Button>
		</CardFooter>
	);
};

export default CardFooterLink;
