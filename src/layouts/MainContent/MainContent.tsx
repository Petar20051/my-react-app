import EventsSection from '../../components/organisms/Sections/EventSection/EventsSection';
import FeaturedSection from '../../components/organisms/Sections/FeaturedSection/FeaturedSection';
import HeroSection from '../../components/organisms/Sections/HeroSection/HeroSection';
import NewsSection from '../../components/organisms/Sections/NewsSection/NewsSection';
import PodcastsSection from '../../components/organisms/Sections/PodcastSection/PodcastsSection';
import SolutionsSection from '../../components/organisms/Sections/SolutionSection/SolutionsSection';
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
