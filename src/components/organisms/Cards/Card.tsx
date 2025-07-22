import type {Card as CardType} from '../../../validation/card-information';
import {CardContainer} from '../../atoms/CardContainer/CardContainer';
import {CardContentWrapper} from '../../atoms/CardContentWrapper/CardContentWrapper';
import Image from '../../atoms/Image/Image';
import Paragraph from '../../atoms/Paragraph/Paragraph';

import Tag from '../../atoms/Tag/Tag';
import TitleWrapper from '../../atoms/TitleWrapper/TitleWrapper';
import CardActions from '../../molecules/ActionButtons/ActionButtons';
import CardContentBlock from '../../molecules/CardContentBlock/CardContentBlock';
import CardFooterLink from '../../molecules/CardFooterLink/CardFooterLink';
import HeadingBlock from '../../molecules/HeadingBlock/HeadingBlock';
import {TopicsWrapper} from './Card.styles';

export type Variant = 'default' | 'event' | 'news' | 'podcast' | 'solution' | 'featured';

type Props = {
	variant?: Variant;
	card: CardType;
	onClick?: () => void;
	onEdit?: () => void;
	onDelete?: () => void;
};

const Card = ({variant = 'default', card, onClick, onEdit, onDelete}: Props) => {
	const hasImage = !!card.image;
	const imageNode = hasImage ? <Image variant={variant} src={card.image!} alt={card.title ?? 'Card image'} /> : null;

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
		<CardContainer variant={variant}>
			{variant === 'featured' || variant === 'podcast' ? (
				<CardContentWrapper variant={variant} hasImage={hasImage} imageNode={imageNode}>
					{content}
				</CardContentWrapper>
			) : (
				<>
					{imageNode}
					{card.tag && <Tag>{card.tag}</Tag>}
					<CardContentWrapper variant={variant}>{content}</CardContentWrapper>
				</>
			)}

			<CardFooterLink linkText={card.linkText} onClick={onClick} />
		</CardContainer>
	);
};

export default Card;
