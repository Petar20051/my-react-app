import Button from '../../components/atoms/Button/Button';

import Paragraph from '../../components/atoms/Paragraph/Paragraph';

import {NotFoundImage} from './NotFoundPage.styles';

export default function NotFound() {
	return (
		<>
			<NotFoundImage />
			<Paragraph variant="message">Oops! That page doesn’t exist.</Paragraph>
			<Button variant="homeLink" href="/">
				Return to Homepage
			</Button>
		</>
	);
}
