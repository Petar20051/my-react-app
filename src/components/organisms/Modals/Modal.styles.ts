import styled from 'styled-components';

export const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.3);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 10000;
`;

export const ModalFormWrapper = styled.div`
	background: #ffffff;
	border-radius: 10px;
	padding: 40px;
	width: 100%;
	max-width: 500px;
	box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
	@media (max-width: 600px) {
		max-width: 80%;
		margin: 0 auto;
	}
`;

export const ModalField = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;

	p {
		font-size: 14px;
		font-weight: 600;
		color: #333;
		margin: 0;
	}
`;

export const ButtonGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-top: 12px;
`;

export const LongInput = styled.textarea`
	min-height: 100px;
	padding: 10px;
	font-size: 14px;
	border: 1px solid #ccc;
	border-radius: 6px;
	resize: vertical;
	font-family: inherit;
	line-height: 1.5;

	&:focus {
		outline: none;
		border-color: #999;
		box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
	}
`;
