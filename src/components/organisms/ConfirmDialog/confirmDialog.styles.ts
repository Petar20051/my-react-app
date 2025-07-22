import styled from 'styled-components';

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
`;

export const Modal = styled.div`
	background: white;
	padding: 24px;
	border-radius: 8px;
	min-width: 300px;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

export const Message = styled.p`
	font-size: 16px;
	margin-bottom: 16px;
	text-align: center;
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-around;
`;

export const Button = styled.button`
	padding: 8px 16px;
	font-size: 14px;
	border: none;
	border-radius: 4px;
	background-color: #007bff;
	color: white;
	cursor: pointer;

	&:last-child {
		background-color: #6c757d;
	}

	&:hover {
		opacity: 0.9;
	}
`;
