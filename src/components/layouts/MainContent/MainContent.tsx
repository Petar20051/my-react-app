import HeroSection from '../../organisms/Sections/HeroSection';
import EventsSection from '../../organisms/Sections/EventsSection';
import FeaturedSection from '../../organisms/Sections/FeaturedSection';
import NewsSection from '../../organisms/Sections/NewsSection';
import PodcastsSection from '../../organisms/Sections/PodcastsSection';
import SolutionsSection from '../../organisms/Sections/SolutionsSection';
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
