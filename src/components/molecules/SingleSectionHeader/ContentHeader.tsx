import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useSearchParams} from 'react-router-dom';
import {Description, HeaderWrapper, Title} from './contentHeader.styles';
import {faQuestionCircle} from '@fortawesome/free-solid-svg-icons';
import {descMap, iconMap, titleMap} from './constants';

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
				<Description>{desc}</Description>
			</div>
		</HeaderWrapper>
	);
};

export default ContentHeader;
