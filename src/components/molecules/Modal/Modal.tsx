import React from 'react';
import {ModalFormWrapper, ModalOverlay} from '../../organisms/Modals/Modal.styles';

type ModalProps = {
	children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({children}) => {
	return (
		<ModalOverlay>
			<ModalFormWrapper>{children}</ModalFormWrapper>
		</ModalOverlay>
	);
};

export default Modal;
