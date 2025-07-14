import {useSearchParams} from 'react-router-dom';
import type {JSX} from 'react';
import ContentHeader from '../../molecules/SingleSectionHeader/ContentHeader';
import {ContentWrapper, PageWrapper} from './singleSectionPage.styles';
import EventsSection from '../../organisms/Sections/EventsSection';
import NewsSection from '../../organisms/Sections/NewsSection';
import PodcastsSection from '../../organisms/Sections/PodcastsSection';

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
