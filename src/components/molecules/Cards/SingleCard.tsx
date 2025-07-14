import {StyledCardImage} from '../../atoms/Image';
import {Badge, BadgeRow, CardTitle, Description, Metadata, Subtitle, TopicTag} from '../../atoms/Typography';
import {StyledCard} from '../Card';
import {StyledCardContent} from '../CardContent';
import {StyledCardFooter} from '../CardFooter';

type SingleCardProps = {
	card: {
		image?: string;
		label?: string;
		tag?: string;
		category?: string;
		title: string;
		info?: string;
		description: string;
		date?: string;
		episode?: string | number;
		topics?: string[];
	};
};

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
					{episode && <span>🎙{episode}</span>}
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
