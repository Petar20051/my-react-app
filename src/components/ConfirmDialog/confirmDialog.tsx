import React from 'react';
import {Button, ButtonContainer, Message, Modal, Overlay} from './confirmDialog.styles';
import type {ConfirmDialogProps} from '../../types/formProps';

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({message, visible, onConfirm, onCancel}) => {
	if (!visible) return null;

	return (
		<Overlay>
			<Modal>
				<Message>{message}</Message>
				<ButtonContainer>
					<Button onClick={onConfirm}>Yes</Button>
					<Button onClick={onCancel}>Cancel</Button>
				</ButtonContainer>
			</Modal>
		</Overlay>
	);
};

export default ConfirmDialog;
