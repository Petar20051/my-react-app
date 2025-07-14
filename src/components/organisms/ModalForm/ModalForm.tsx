import {FormTitle, StyledForm, Input, Button} from '../Auth/AuthStyles';
import {ButtonGroup, ModalField, LongInput} from '../Modals/Modal.styles';
import {fieldMap} from '../../../constants/defaults';
import {isTextArea, capitalize} from '../../../utils/formHelpers';
import {useModalForm} from './ModalForm.logic';
import type {CardType} from '../../../context/CardContext';

type ModalFormProps = {
	mode: 'add' | 'edit';
	cardType: CardType;
	onClose: () => void;
};

const ModalForm = ({mode, cardType, onClose}: ModalFormProps) => {
	const fields = fieldMap[cardType];
	const {formData, errors, handleChange, handleSubmit} = useModalForm({
		mode,
		cardType,
		fields,
		onClose,
	});

	return (
		<>
			<FormTitle>
				{mode === 'add' ? 'Create' : 'Edit'} {cardType} Card
			</FormTitle>
			<StyledForm onSubmit={handleSubmit}>
				<ModalField>
					<p>Variant:</p>
					<select name="variant" value={formData.variant} onChange={handleChange}>
						<option value="default">Default</option>
						<option value="wide">Wide</option>
						<option value="compact">Compact</option>
						<option value="reversed">Reversed</option>
					</select>
				</ModalField>

				{fields
					.filter((field) => field !== 'variant')
					.map((field) => {
						const InputComponent = isTextArea(field) ? LongInput : Input;
						return (
							<ModalField key={field}>
								<p>{capitalize(field)}:</p>
								{(() => {
									const Component = InputComponent as React.ElementType;
									return <Component name={field} placeholder={field} value={formData[field] ?? ''} onChange={handleChange} />;
								})()}
								{errors[field] && <small style={{color: 'red', fontSize: '0.8em'}}>{errors[field]}</small>}
							</ModalField>
						);
					})}

				<ButtonGroup>
					<Button type="submit">{mode === 'add' ? 'Add' : 'Save'}</Button>
					<Button type="button" style={{background: '#ccc', color: '#222'}} onClick={onClose}>
						Cancel
					</Button>
				</ButtonGroup>
			</StyledForm>
		</>
	);
};

export default ModalForm;
