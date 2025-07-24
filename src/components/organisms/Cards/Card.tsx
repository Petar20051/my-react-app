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
import {TopicsWrapper} from './Card.styles';

export type Variant = 'default' | 'event' | 'news' | 'podcast' | 'solution' | 'featured';
export type Layout = 'normal' | 'compact' | 'wide';
export type Orientation = 'vertical' | 'horizontal';

type Props = {
	card: CardType;
	variant?: Variant;
	layout?: Layout;
	orientation?: Orientation;
	onClick?: () => void;
	onEdit?: () => void;
	onDelete?: () => void;
};

const mapVariant = (layout: Layout = 'normal', orientation: Orientation = 'vertical'): Variant => {
	if (layout === 'wide') {
		return orientation === 'horizontal' ? 'featured' : 'default';
	}
	if (layout === 'compact') return 'news';
	if (layout === 'normal') return orientation === 'horizontal' ? 'podcast' : 'default';
	return 'default';
};

const Card = ({card, variant, layout = 'normal', orientation = 'vertical', onClick, onEdit, onDelete}: Props) => {
	const finalVariant: Variant = variant ?? mapVariant(layout, orientation);
	const hasImage = !!card.image;

	const imageNode = hasImage ? <Image variant={finalVariant} src={card.image!} alt={card.title ?? 'Card image'} /> : null;

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

	return (
		<CardContainer variant={finalVariant}>
			{finalVariant === 'featured' || finalVariant === 'podcast' ? (
				<CardContentWrapper variant={finalVariant} hasImage={hasImage} imageNode={imageNode}>
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
