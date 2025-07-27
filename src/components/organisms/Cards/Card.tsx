import type {Card as CardType} from './Card.static';
import {CardContainer} from '../../atoms/CardContainer/CardContainer';
import {CardContentWrapper} from '../../atoms/CardContentWrapper/CardContentWrapper';
import Image from '../../atoms/Image/Image';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Tag from '../../atoms/Tag/Tag';
import TitleWrapper from '../../atoms/TitleWrapper/TitleWrapper';
import CardActions from '../../molecules/ActionButtons/ActionButtons';
import CardContentBlock from '../../molecules/ContentBlock/ContentBlock';
import CardFooterLink from '../../molecules/CardFooter/CardFooter';
import HeadingBlock from '../../molecules/HeadingBlock/HeadingBlock';
import {TopicsWrapper} from '../Sections/FeaturedSection/FeaturedSection.styles';

export type Variant = 'default' | 'event' | 'news' | 'podcast' | 'solution' | 'featured' | 'preview';
export type Layout = 'normal' | 'compact' | 'wide';
export type Orientation = 'vertical' | 'horizontal' | 'reversed';

type Props = {
	card: CardType;
	index?: number;
	variant?: Variant;
	layout?: Layout;
	orientation?: Orientation;
	onClick?: () => void;
	onEdit?: () => void;
	onDelete?: () => void;
};

const Card = ({card, index, variant = 'default', layout = 'normal', orientation, onClick, onEdit, onDelete}: Props) => {
	const hasImage = Boolean(card.image);

	const isPreview = variant === 'preview';
	const finalVariant: Variant = isPreview ? 'preview' : variant;

	const finalOrientation: Orientation =
		orientation ?? (['featured', 'preview', 'podcast'].includes(finalVariant) ? 'horizontal' : 'vertical');

	const imageNode = hasImage ? (
		<Image variant={finalVariant} layout={finalOrientation} src={card.image!} alt={card.title ?? 'Card image'} />
	) : null;

	const content = (
		<>
			{card.episode && <Paragraph variant="date">{card.episode}</Paragraph>}
			{card.category && <Paragraph variant="default">{card.category}</Paragraph>}
			<TitleWrapper variant="solution">
				<HeadingBlock label={card.label} title={card.title} tag={card.tag} />
				<CardActions onEdit={onEdit} onDelete={onDelete} />
			</TitleWrapper>
			<CardContentBlock description={card.description} info={card.info} />
			{card.topics && card.topics.length > 0 && (
				<TopicsWrapper>
					{card.topics.map((topic, i) => (
						<Tag key={i}>{topic}</Tag>
					))}
				</TopicsWrapper>
			)}
			{card.date && <Paragraph variant="date">{card.date}</Paragraph>}
		</>
	);

	const usesWrapper = ['featured', 'preview', 'podcast'].includes(finalVariant);

	return (
		<CardContainer variant={finalVariant} sizeVariant={layout}>
			{usesWrapper ? (
				<CardContentWrapper variant={finalVariant} layout={finalOrientation} index={index} hasImage={hasImage} imageNode={imageNode}>
					{content}
				</CardContentWrapper>
			) : (
				<>
					{imageNode}
					{card.tag && <Tag>{card.tag}</Tag>}
					<CardContentWrapper variant={finalVariant}>{content}</CardContentWrapper>
				</>
			)}

			<CardFooterLink linkText={card.linkText} onClick={onClick} />
		</CardContainer>
	);
};

export default Card;
