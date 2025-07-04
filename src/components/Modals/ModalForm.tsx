import {FormTitle, StyledForm, Input, Button} from '../Auth/AuthStyles';
import {ButtonGroup, ModalOverlay, ModalFormWrapper, ModalField, LongInput} from './Modal.styles';
import type {ModalFormProps} from '../../types/formProps';
import {fieldMap} from '../../constants/defaults';
import {isTextArea, capitalize} from '../../utils/formHelpers';
import {useModalForm} from '../../hooks/useModalForm';

const ModalForm = ({mode, cardType, initialData = {}, onSubmit, onClose}: ModalFormProps) => {
	const fields = fieldMap[cardType];
	const {formData, errors, handleChange, handleSubmit} = useModalForm(fields, initialData, onSubmit);

	return (
		<ModalOverlay>
			<ModalFormWrapper>
				<FormTitle>
					{mode === 'add' ? 'Create' : 'Edit'} {cardType} Card
				</FormTitle>
				<StyledForm onSubmit={handleSubmit}>
					{fields.map((field) => {
						const InputComponent = isTextArea(field) ? LongInput : Input;

						return (
							<ModalField key={field}>
								<p>{capitalize(field)}:</p>
								{InputComponent === LongInput ? (
									<LongInput name={field} placeholder={field} value={formData[field]} onChange={handleChange} />
								) : (
									<Input name={field} placeholder={field} value={formData[field]} onChange={handleChange} />
								)}
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
			</ModalFormWrapper>
		</ModalOverlay>
	);
};

export default ModalForm;
