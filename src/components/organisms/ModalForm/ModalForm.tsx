import {FormTitle, StyledForm, Input, Button} from '../Auth/Auth.styles';
import {ButtonGroup, ModalField, LongInput} from '../Modals/Modal.styles';
import {fieldMap} from '../../../constants/defaults';
import {isTextArea, capitalize} from '../../../utils/formHelpers';
import {useModalForm} from './ModalForm.logic';
import type {CardSectionType, Card} from '../../../validation/card-information';

type ModalFormProps = {
	mode: 'add' | 'edit';
	cardType: CardSectionType;
	onClose: () => void;
};

const ModalForm = ({mode, cardType, onClose}: ModalFormProps) => {
	const fields = fieldMap[cardType] as (keyof Card)[];
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
				{fields
					.filter((field) => field !== 'variant')
					.map((field) => {
						const InputComponent = isTextArea(field) ? LongInput : (Input as React.ElementType);
						const value = formData[field as keyof typeof formData] ?? '';

						return (
							<ModalField key={field}>
								<p>{capitalize(field)}:</p>
								<InputComponent name={field} placeholder={field} value={value} onChange={handleChange} />
								{errors[field as keyof typeof errors] && (
									<small style={{color: 'red', fontSize: '0.8em'}}>{errors[field as keyof typeof errors]}</small>
								)}
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
