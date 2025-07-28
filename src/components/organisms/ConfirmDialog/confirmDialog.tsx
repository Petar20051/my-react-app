import React from 'react';
import {Button, ButtonContainer, Message} from './ConfirmDialog.styles';

type ConfirmDialogProps = {
	message: string;
	visible: boolean;
	onConfirm: () => void;
	onCancel: () => void;
};

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({message, visible, onConfirm, onCancel}) => {
	if (!visible) return null;

	return (
		<>
			<Message>{message}</Message>
			<ButtonContainer>
				<Button onClick={onConfirm}>Yes</Button>
				<Button onClick={onCancel}>Cancel</Button>
			</ButtonContainer>
		</>
	);
};

export default ConfirmDialog;
