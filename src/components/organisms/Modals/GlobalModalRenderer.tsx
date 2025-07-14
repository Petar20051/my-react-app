import {useSearchParams, useLocation, useNavigate} from 'react-router-dom';
import ModalForm from '../ModalForm/ModalForm';
import {CARD_TYPE} from '../../../constants/cardTypes';
import type {CardType} from '../../../context/CardContext';
import Modal from '../../molecules/Modal/Modal';

const isValidCardType = (value: string): value is CardType => Object.values(CARD_TYPE).includes(value as CardType);

const GlobalModalRenderer = () => {
	const [searchParams] = useSearchParams();
	const location = useLocation();
	const navigate = useNavigate();

	const modal = searchParams.get('modal') as 'add' | 'edit' | null;
	const rawCardType = searchParams.get('cardType');

	if (!modal || !rawCardType || !isValidCardType(rawCardType)) return null;

	const cardType: CardType = rawCardType;

	const handleClose = () => {
		const params = new URLSearchParams(location.search);
		params.delete('modal');
		params.delete('cardType');
		params.delete('id');
		navigate({pathname: location.pathname, search: params.toString()}, {replace: true});
	};

	return (
		<Modal>
			<ModalForm mode={modal} cardType={cardType} onClose={handleClose} />
		</Modal>
	);
};

export default GlobalModalRenderer;
