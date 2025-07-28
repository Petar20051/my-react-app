import styled from 'styled-components';

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
