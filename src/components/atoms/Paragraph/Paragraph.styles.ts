import styled, {css} from 'styled-components';

export type ParagraphVariant = 'description' | 'info' | 'message' | 'date' | 'default';

export const StyledParagraph = styled.p<{$variant: ParagraphVariant}>`
	margin: 0;
	word-wrap: normal;

	${({$variant}) => {
		switch ($variant) {
			case 'description':
				return css`
					font-size: 19px;
					color: #333;
					opacity: 0.8;
					min-height: 40px;
				`;
			case 'info':
				return css`
					font-size: 17px;
					color: #666;
					opacity: 0.6;
					min-height: 20px;
				`;
			case 'message':
				return css`
					margin-top: 30px;
					font-size: 24px;
					color: #333;
				`;
			case 'date':
				return css`
					margin-top: 10px;
					font-size: 14px;
					opacity: 0.6;
				`;
			default:
				return css`
					font-size: 12px;
					line-height: 1.75;
					color: #374151;
					opacity: 0.8;
					text-transform: uppercase;
				`;
		}
	}}
`;
