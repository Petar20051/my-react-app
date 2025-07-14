import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLocationDot, faQuestionCircle, faUserCircle, faTh} from '@fortawesome/free-solid-svg-icons';
import logo from '/assets/logo.png';
import React from 'react';
import {
	CompanyTitle,
	LeftSection,
	LocationOption,
	LocationSelector,
	Logo,
	MenuIcon,
	NavigationIcons,
	NavigationWrapper,
	RightSection,
} from './navigation.styles';

type NavigationProps = {
	toggleSidebar: () => void;
	menuRef: React.RefObject<HTMLDivElement>;
};

const Navigation: React.FC<NavigationProps> = ({toggleSidebar, menuRef}) => {
	return (
		<NavigationWrapper>
			<LeftSection>
				<MenuIcon onClick={toggleSidebar} ref={menuRef}>
					<span></span>
					<span></span>
					<span></span>
				</MenuIcon>
				<Logo src={logo} alt="VaraPlus Logo" />
				<CompanyTitle>VaraPlus</CompanyTitle>
			</LeftSection>

			<RightSection>
				<LocationSelector>
					<FontAwesomeIcon icon={faLocationDot} />
					<LocationOption>
						<label>Farm:</label>
						<select>
							<option>Rasa Creek</option>
							<option>United States</option>
							<option>Germany</option>
							<option>United Kingdom</option>
						</select>
					</LocationOption>
				</LocationSelector>

				<NavigationIcons>
					<li>
						<a href="#">
							<FontAwesomeIcon icon={faQuestionCircle} />
						</a>
					</li>
					<li>
						<a href="#">
							<FontAwesomeIcon icon={faUserCircle} />
						</a>
					</li>
					<li>
						<a href="#">
							<FontAwesomeIcon icon={faTh} />
						</a>
					</li>
				</NavigationIcons>
			</RightSection>
		</NavigationWrapper>
	);
};

export default Navigation;
