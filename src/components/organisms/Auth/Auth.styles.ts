import styled from 'styled-components';

export const FormContainer = styled.div`
	max-width: 400px;
	margin: 100px auto;
	background: #ffffff;
	border-radius: 10px;
	padding: 40px;
	box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
`;

export const FormTitle = styled.h2`
	text-align: center;
	margin-bottom: 24px;
	font-size: 24px;
	color: darkblue;
`;

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

export const Input = styled.input`
	padding: 10px 12px;
	border: 1px solid #ccc;
	border-radius: 6px;
	font-size: 14px;

	&:focus {
		outline: none;
		border-color: #222294;
	}
`;

export const Button = styled.button`
	background-color: #222294;
	color: white;
	padding: 10px 0;
	border: none;
	border-radius: 6px;
	font-size: 15px;
	cursor: pointer;
	font-weight: 600;

	&:hover {
		background-color: #171a85;
	}
`;

export const ErrorText = styled.p`
	color: red;
	font-size: 13px;
	margin: -10px 0 0 0;
`;

export const SwitchLink = styled.p`
	font-size: 14px;
	text-align: center;

	a {
		color: #0060c9;
		font-weight: bold;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`;
