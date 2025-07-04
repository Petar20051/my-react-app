import {HomeLink, Message, NotFoundImage, Wrapper} from './notFound.styles';

export default function NotFound() {
	return (
		<Wrapper>
			<NotFoundImage />
			<Message>Oops! That page doesn’t exist.</Message>
			<HomeLink href="/">Return to Homepage</HomeLink>
		</Wrapper>
	);
}
