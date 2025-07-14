import styled from 'styled-components';

export const CardFooter = styled.div`
	padding: 26px;
	display: flex;
	justify-content: flex-end;
	border-top: 1px solid rgba(0, 0, 0, 0.2);

	a {
		font-size: 14px;
		font-weight: bold;
		color: #0060c9;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`;

export const StyledCardFooter = styled(CardFooter)`
	justify-content: flex-start;
	padding-top: 20px;
	gap: 20px;

	a {
		font-size: 14px;
		color: #2563eb;
	}
`;
