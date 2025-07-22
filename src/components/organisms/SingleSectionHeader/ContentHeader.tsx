import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useSearchParams} from 'react-router-dom';
import {HeaderWrapper} from './contentHeader.styles';
import {faQuestionCircle} from '@fortawesome/free-solid-svg-icons';
import {descMap, iconMap, titleMap} from './constants';
import Title from '../../atoms/Title/Title';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const ContentHeader = () => {
	const [searchParams] = useSearchParams();
	const type = searchParams.get('type') || 'unknown';

	const icon = iconMap[type] || faQuestionCircle;
	const title = titleMap[type] || 'Unknown Section';
	const desc = descMap[type] || 'Please select a valid content type.';

	return (
		<HeaderWrapper>
			<div>
				<Title>
					<FontAwesomeIcon icon={icon} />
					{title}
				</Title>
				<Paragraph variant="description">{desc}</Paragraph>
			</div>
		</HeaderWrapper>
	);
};

export default ContentHeader;
