import {useState} from 'react';
import ModalForm from '../Modals/ModalForm';
import ConfirmDialog from '../ConfirmDialog/confirmDialog';
import {Link, useNavigate, useSearchParams} from 'react-router-dom';
import {
	Section,
	SectionHeading,
	ButtonWrapper,
	CTAButton,
	SectionHeadingBTn,
	SectionTitle,
	SectionTitleWrapper,
} from '../../styles/sections.styles';
import {useCardSectionLogic} from './useCardSectionLogic';
import type {CardSectionConfig} from '../../constants/sectionConfig';

export function CardSectionRenderer<T>(config: CardSectionConfig<T>) {
	const {
		cards,
		loading,
		error,
		modalType,
		typeParam,
		editCard,
		openAddModal,
		openEditModal,
		closeModal,
		onAddCard,
		onEditCard,
		handleDeleteCard,
	} = useCardSectionLogic<T>(config.cardType, config.dataPath, config.schema, config.transformInputToCard);

	const [showConfirm, setShowConfirm] = useState(false);
	const [deleteIndex, setDeleteIndex] = useState<number | null>(null);
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const type = searchParams.get('type');

	const requestDelete = (index: number) => {
		setDeleteIndex(index);
		setShowConfirm(true);
	};

	const confirmDelete = () => {
		if (deleteIndex !== null) handleDeleteCard(deleteIndex);
		setShowConfirm(false);
		setDeleteIndex(null);
	};

	const cancelDelete = () => {
		setShowConfirm(false);
		setDeleteIndex(null);
	};

	const Grid = config.CardGridWrapper;

	return (
		<Section>
			<SectionTitle>{config.subtitle}</SectionTitle>
			<SectionTitleWrapper>
				<SectionHeading>{config.title}</SectionHeading>
				<ButtonWrapper>
					{!type && config.headerBtn && (
						<Link to={`/content?type=${config.cardType}`}>
							<SectionHeadingBTn>{config.headerBtn}</SectionHeadingBTn>
						</Link>
					)}

					<CTAButton
						onClick={() => {
							openAddModal();
						}}
					>
						➕
					</CTAButton>
				</ButtonWrapper>
			</SectionTitleWrapper>

			{loading && <p>Loading...</p>}
			{error && <p style={{color: 'red'}}>{error}</p>}

			{cards && (
				<Grid>
					{cards.map((card, index) =>
						config.renderCard(card, index, {
							onEdit: () => openEditModal(index),
							onDelete: () => requestDelete(index),
							onClick: () =>
								navigate(`/single?type=${config.cardType}&id=${index}`, {
									state: {card},
								}),
						})
					)}
				</Grid>
			)}

			{modalType === 'add' && typeParam === config.cardType && (
				<ModalForm mode="add" cardType={config.cardType} onClose={closeModal} onSubmit={onAddCard} />
			)}

			{modalType === 'edit' && editCard && (
				<ModalForm mode="edit" cardType={config.cardType} initialData={editCard} onClose={closeModal} onSubmit={onEditCard} />
			)}

			<ConfirmDialog message={config.deleteConfirmMessage} visible={showConfirm} onConfirm={confirmDelete} onCancel={cancelDelete} />
		</Section>
	);
}
