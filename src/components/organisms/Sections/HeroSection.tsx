import {getAuthUser} from '../../../utils/authStorage';
import {HeroContainer} from '../../atoms/Layout';
import {HeroDescription, HeroTitle} from '../../atoms/Typography';

const HeroSection = () => {
	const user = getAuthUser();

	return (
		<HeroContainer>
			<HeroTitle>Welcome, {user?.username}!</HeroTitle>
			<HeroDescription>
				Access all our solutions, products and knowledge in one place to enhance your crop nutrition decisions.
			</HeroDescription>
		</HeroContainer>
	);
};

export default HeroSection;
