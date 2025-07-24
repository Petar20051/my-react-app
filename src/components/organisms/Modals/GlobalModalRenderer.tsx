import {useSearchParams} from 'react-router-dom';
import Modal from '../../molecules/Modal/Modal';
import ModalContentRouter from './ModalContentRouter';

const GlobalModalRenderer = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const modal = searchParams.get('modal');

	const handleClose = () => {
		const updatedParams = new URLSearchParams(searchParams);
		updatedParams.delete('modal');
		updatedParams.delete('cardType');
		updatedParams.delete('id');
		setSearchParams(updatedParams);
	};

	return (
		<>
			{modal && (
				<Modal>
					<ModalContentRouter onClose={handleClose} />
				</Modal>
			)}
		</>
	);
};

export default GlobalModalRenderer;
