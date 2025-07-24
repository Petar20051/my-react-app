import {useSearchParams} from 'react-router-dom';
import type {JSX} from 'react';
import {ContentWrapper, PageWrapper, StyledErrorMessage} from './SingleSectionPage.styles';
import EventsSection from '../../components/organisms/Sections/EventSection/EventsSection';
import NewsSection from '../../components/organisms/Sections/NewsSection/NewsSection';
import PodcastsSection from '../../components/organisms/Sections/PodcastSection/PodcastsSection';
import ContentHeader from '../../components/molecules/SingleSectionHeader/SingleSectionHeader';

const SingleContentPage = () => {
	const [searchParams] = useSearchParams();
	const type = searchParams.get('type');

	const sectionMap: Record<string, JSX.Element> = {
		events: <EventsSection />,
		news: <NewsSection />,
		podcasts: <PodcastsSection />,
	};

	const selectedSection = sectionMap[type ?? ''] || <StyledErrorMessage>Invalid or missing content type.</StyledErrorMessage>;

	return (
		<PageWrapper>
			<ContentHeader />
			<ContentWrapper>{selectedSection}</ContentWrapper>
		</PageWrapper>
	);
};

export default SingleContentPage;
