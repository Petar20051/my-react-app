import {useSearchParams} from 'react-router-dom';
import EventsSection from '../../components/Sections/Event/events';
import NewsSection from '../../components/Sections/News/news';
import PodcastsSection from '../../components/Sections/Podcast/podcasts';
import type {JSX} from 'react';
import ContentHeader from '../../components/SingleSection/ContentHeader';
import {ContentWrapper, PageWrapper} from './singleSectionPage.styles';

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
