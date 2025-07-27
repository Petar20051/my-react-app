import styled, {css} from 'styled-components';

type Variant = 'default' | 'event' | 'news' | 'podcast' | 'solution' | 'featured';

export const CardGrid = styled.div<{$variant: Variant}>`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	${({$variant}) =>
		$variant === 'event' &&
		css`
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 30px;

			@media (max-width: 970px) {
				grid-template-columns: 1fr;
			}
		`}

	${({$variant}) =>
		$variant === 'solution' &&
		css`
			display: grid;
			grid-template-columns: repeat(5, 1fr);
			gap: 20px;

			@media (max-width: 1602px) {
				grid-template-columns: repeat(4, 1fr);
			}

			@media (max-width: 1380px) {
				grid-template-columns: repeat(2, 1fr);
			}

			@media (max-width: 600px) {
				grid-template-columns: 1fr;
			}
		`}

	${({$variant}) =>
		$variant === 'featured' &&
		css`
			display: grid;
			grid-template-columns: 67% 30%;
			gap: 3%;

			@media (max-width: 1270px) {
				grid-template-columns: 1fr;
			}

			@media (max-width: 550px) {
				display: flex;
				flex-direction: column;
				gap: 20px;
			}
		`}

		${({$variant}) =>
		$variant === 'podcast' &&
		css`
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			max-height: 100%;
		`}
`;
