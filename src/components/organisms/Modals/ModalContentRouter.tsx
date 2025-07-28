import React from 'react';
import {useSearchParams} from 'react-router-dom';
import {cardSectionTypes, type CardSectionType} from '../Cards/Card.static';
import ModalForm from '../ModalForm/ModalForm';
import ConfirmDialog from '../ConfirmDialog/ConfirmDialog';
import {useAuth} from '../../../context/AuthContext';

type ModalContentRouterProps = {
	onClose: () => void;
};

const isValidCardType = (value: string): value is CardSectionType => cardSectionTypes.includes(value as CardSectionType);

const ModalContentRouter: React.FC<ModalContentRouterProps> = ({onClose}) => {
	const [searchParams] = useSearchParams();
	const modal = searchParams.get('modal');
	const rawCardType = searchParams.get('cardType');
	const {logout} = useAuth();

	if (modal === 'confirmLogout') {
		return (
			<ConfirmDialog
				message="Are you sure you want to log out?"
				visible={true}
				onConfirm={() => {
					logout();
					onClose();
				}}
				onCancel={onClose}
			/>
		);
	}

	if ((modal === 'add' || modal === 'edit') && rawCardType && isValidCardType(rawCardType)) {
		return <ModalForm mode={modal} cardType={rawCardType} onClose={onClose} />;
	}

	return null;
};

export default ModalContentRouter;
