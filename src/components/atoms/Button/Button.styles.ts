import styled, {css} from 'styled-components';

export type ButtonVariant = 'sectionHeading' | 'homeLink' | 'cta';

export const StyledButton = styled.a<{$variant?: ButtonVariant}>`
	display: inline-block;
	cursor: pointer;
	text-decoration: none;

	${({$variant}) => {
		switch ($variant) {
			case 'homeLink':
				return css`
					margin-top: 20px;
					color: white;
					background-color: #007bff;
					padding: 10px 20px;
					border-radius: 4px;

					&:hover {
						background-color: #0056b3;
					}
				`;
			case 'cta':
				return css`
					background-color: transparent;
					border: none;
					padding: 0;
					margin: 0;
				`;
			case 'sectionHeading':
			default:
				return css`
					font-size: 14px;
					font-weight: bold;
					color: lightskyblue;
					border: 1px solid lightskyblue;
					border-radius: 5px;
					padding: 12px 20px;

					&:hover {
						background-color: rgba(135, 206, 250, 0.1);
					}
				`;
		}
	}}
`;
