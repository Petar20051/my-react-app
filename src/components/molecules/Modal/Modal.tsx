import React from 'react';
import {ModalFormWrapper, ModalOverlay} from './Modal.styles';

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
