import {HomeLink} from '../../atoms/Button';
import {NotFoundImage} from '../../atoms/Image';
import {Wrapper} from '../../atoms/Layout';
import {Message} from '../../atoms/Typography';

export default function NotFound() {
	return (
		<Wrapper>
			<NotFoundImage />
			<Message>Oops! That page doesn’t exist.</Message>
			<HomeLink href="/">Return to Homepage</HomeLink>
		</Wrapper>
	);
}
