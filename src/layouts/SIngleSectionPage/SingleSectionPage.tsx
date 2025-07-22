import {useSearchParams} from 'react-router-dom';
import type {JSX} from 'react';

import {ContentWrapper, PageWrapper} from './singleSectionPage.styles';
import EventsSection from '../../components/organisms/Sections/EventSection/EventsSection';
import NewsSection from '../../components/organisms/Sections/NewsSection/NewsSection';
import PodcastsSection from '../../components/organisms/Sections/PodcastSection/PodcastsSection';
import ContentHeader from '../../components/organisms/SingleSectionHeader/ContentHeader';

const SingleContentPage = () => {
	const [searchParams] = useSearchParams();
	const type = searchParams.get('type');

	const sectionMap: Record<string, JSX.Element> = {
		events: <EventsSection />,
		news: <NewsSection />,
		podcasts: <PodcastsSection />,
	};

	const selectedSection = sectionMap[type ?? ''] || <p style={{padding: '40px', color: 'red'}}>Invalid or missing content type.</p>;

	return (
		<PageWrapper>
			<ContentHeader />
			<ContentWrapper>{selectedSection}</ContentWrapper>
		</PageWrapper>
	);
};

export default SingleContentPage;
