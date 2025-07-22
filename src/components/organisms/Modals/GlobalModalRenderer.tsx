import {useSearchParams} from 'react-router-dom';
import ModalForm from '../ModalForm/ModalForm';
import Modal from '../../molecules/Modal/Modal';
import {cardSectionTypes, type CardSectionType} from '../../../validation/card-information';

const isValidCardType = (value: string): value is CardSectionType => cardSectionTypes.includes(value as CardSectionType);

const GlobalModalRenderer = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const modal = searchParams.get('modal') as 'add' | 'edit' | null;
	const rawCardType = searchParams.get('cardType');

	if (!modal || !rawCardType || !isValidCardType(rawCardType)) return null;

	const cardType: CardSectionType = rawCardType;

	const handleClose = () => {
		const updatedParams = new URLSearchParams(searchParams);
		updatedParams.delete('modal');
		updatedParams.delete('cardType');
		updatedParams.delete('id');
		setSearchParams(updatedParams);
	};

	return (
		<Modal>
			<ModalForm mode={modal} cardType={cardType} onClose={handleClose} />
		</Modal>
	);
};

export default GlobalModalRenderer;
