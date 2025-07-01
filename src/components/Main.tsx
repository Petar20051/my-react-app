import styled from 'styled-components';
import HeroSection from './Sections/hero';
import SolutionsSection from './Sections/solutions';
import FeaturedSection from './Sections/featured';
import NewsSection from './Sections/news';
import EventsSection from './Sections/events';
import PodcastsSection from './Sections/podcasts';
import {SectionWrapper} from '../styles/shared';

const MainWrapper = styled.div`
	width: 100%;
`;

const SectionsWrapper = styled.div`
	padding: 40px 70px;
	display: flex;
	flex-direction: column;
	background-color: aliceblue;
`;

export default function MainContent() {
	return (
		<MainWrapper>
			<HeroSection />
			<SectionsWrapper>
				<SolutionsSection />
				<FeaturedSection />
				<SectionWrapper>
					<EventsSection />
					<PodcastsSection />
				</SectionWrapper>
				<NewsSection />
			</SectionsWrapper>
		</MainWrapper>
	);
}
