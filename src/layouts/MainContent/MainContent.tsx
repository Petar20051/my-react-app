import HeroSection from '../../components/Sections/Hero/hero';
import SolutionsSection from '../../components/Sections/Solution/solutions';
import FeaturedSection from '../../components/Sections/Featured/featured';
import NewsSection from '../../components/Sections/News/news';
import EventsSection from '../../components/Sections/Event/events';
import PodcastsSection from '../../components/Sections/Podcast/podcasts';
import {MainWrapper, SectionSplitter, SectionsWrapper} from './MainContent.styles';

export default function MainContent() {
	return (
		<MainWrapper>
			<HeroSection />
			<SectionsWrapper>
				<SolutionsSection />
				<FeaturedSection />
				<SectionSplitter>
					<EventsSection />
					<PodcastsSection />
				</SectionSplitter>
				<NewsSection />
			</SectionsWrapper>
		</MainWrapper>
	);
}
