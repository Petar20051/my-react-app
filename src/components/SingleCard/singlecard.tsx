import {CardTitle} from '../../styles/sections.styles';
import {
	Badge,
	BadgeRow,
	Description,
	Metadata,
	StyledCard,
	StyledCardContent,
	StyledCardFooter,
	StyledCardImage,
	Subtitle,
	TopicTag,
} from './singleCard.styles';
import type {SingleCardProps} from './singleCard.type';

const SingleCard = ({card}: SingleCardProps) => {
	const {image, label, tag, category, title, info, description, date, episode, topics} = card;

	return (
		<StyledCard>
			{image && <StyledCardImage src={image} alt={title} />}

			<StyledCardContent>
				<BadgeRow>
					{label && <Badge>{label}</Badge>}
					{tag && <Badge>{tag}</Badge>}
					{category && <Badge>{category}</Badge>}
				</BadgeRow>

				<CardTitle>{title}</CardTitle>
				{info && <Subtitle>{info}</Subtitle>}
				<Description>{description}</Description>

				<Metadata>
					{date && <span>📅 {date}</span>}
					{episode && <span>🎙 Episode {episode}</span>}
					{topics?.map((topic, index) => (
						<TopicTag key={index}>{topic}</TopicTag>
					))}
				</Metadata>
			</StyledCardContent>

			<StyledCardFooter />
		</StyledCard>
	);
};

export default SingleCard;
