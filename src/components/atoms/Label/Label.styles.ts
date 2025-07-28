import styled, {css} from 'styled-components';

export type LabelVariant = 'default' | 'featured' | 'topic' | 'badge';

export const StyledLabel = styled.span<{$variant?: LabelVariant}>`
	font-size: 16px;
	font-weight: bold;
	padding: 4px 6px;
	border-radius: 4px;
	border: 1px solid #d0d6e1;

	${({$variant}) => {
		switch ($variant) {
			case 'featured':
				return css`
					background-color: lightblue;
					color: blue;
				`;
			case 'topic':
				return css`
					padding: 5px 20px;
					background-color: white;
					color: gray;
					border-radius: 30px;
					font-size: 14px;
				`;
			case 'badge':
				return css`
					background: linear-gradient(to right, #eef4ff, #f4f8ff);
					color: #1e3a8a;
					padding: 6px 14px;
					border-radius: 999px;
					border: none;
					font-size: 11px;
					text-transform: uppercase;
					font-weight: 600;
				`;
			default:
				return css`
					color: #222294;
					background-color: #f1f3f9;
				`;
		}
	}}
`;
