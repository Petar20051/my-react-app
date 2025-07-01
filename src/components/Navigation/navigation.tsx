import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLocationDot, faQuestionCircle, faUserCircle, faTh} from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo.png';

const HeaderWrapper = styled.header`
	width: 100%;
	height: 70px;
	background-color: darkblue;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	color: white;
	z-index: 1000;
`;

const LeftSection = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	padding-left: 20px;
`;

const Logo = styled.img`
	height: 40px;
`;

const CompanyTitle = styled.span`
	font-size: 20px;
	font-weight: bold;
`;

const MenuToggle = styled.input`
	display: none;
`;

const MenuIcon = styled.label`
	display: none;
	flex-direction: column;
	gap: 4px;
	cursor: pointer;

	span {
		width: 25px;
		height: 3px;
		background: white;
		display: block;
	}
`;

const RightSection = styled.nav`
	display: flex;
	align-items: center;
	gap: 20px;
	padding-right: 30px;
`;

const LocationSelector = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	background-color: #09144a;
	border-radius: 5px;
	padding: 3px 5px;
`;

const LocationOption = styled.div`
	display: flex;
	flex-direction: column;
	color: white;

	label {
		font-size: 10px;
	}

	select {
		border: none;
		font-size: 12px;
		color: white;
		background-color: transparent;
	}
`;

export const NavIcons = styled.ul`
	list-style: none;
	display: flex;
	gap: 20px;
	margin: 0;
	padding: 0;

	li a {
		color: white;
		font-size: 24px;

		&:hover {
			color: #add8e6;
		}
	}
`;

export default function Navigation() {
	return (
		<HeaderWrapper>
			<LeftSection>
				<Logo src={logo} alt="YaraPlus Logo" />
				<CompanyTitle>VaraPlus</CompanyTitle>
			</LeftSection>

			<MenuToggle type="checkbox" id="menu-toggle" />
			<MenuIcon>
				<span></span>
				<span></span>
				<span></span>
			</MenuIcon>

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

				<NavIcons>
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
				</NavIcons>
			</RightSection>
		</HeaderWrapper>
	);
}
