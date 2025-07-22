import styled, {css} from 'styled-components';

export type TitleVariant = 'featured' | 'solution' | 'section';

interface StyledProps {
	$variant: TitleVariant;
}

export const TitleWrappers = styled.div<StyledProps>`
	display: flex;
	width: 100%;
	justify-content: space-between;

	${({$variant}) => {
		switch ($variant) {
			case 'featured':
				return css`
					flex-direction: row;
					gap: 12px;
					align-items: center;
					flex-wrap: wrap;
				`;
			case 'solution':
				return css`
					flex-direction: row;
					gap: 6px;
					align-items: center;
					margin-bottom: 10px;
				`;

			case 'section':
				return css`
					margin-bottom: 10px;
				`;
		}
	}}
`;
