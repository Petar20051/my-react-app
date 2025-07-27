import React from 'react';
import {FormTitle, StyledForm, Input, Button} from '../Auth/Auth.styles';
import {ButtonGroup, ModalField, LongInput} from '../../molecules/Modal/Modal.styles';
import {fieldMap} from '../../../constants/defaults';
import {isTextArea, capitalize} from '../../../utils/formHelpers';
import {useModalForm} from './ModalForm.logic';
import type {CardSectionType, Card as CardType} from '../Cards/Card.static';
import Card from '../Cards/Card';

type ModalFormProps = {
	mode: 'add' | 'edit';
	cardType: CardSectionType;
	onClose: () => void;
};

const ModalForm = ({mode, cardType, onClose}: ModalFormProps) => {
	const fields = fieldMap[cardType] as (keyof CardType)[];
	const {formData, errors, handleChange, handleSubmit} = useModalForm({
		mode,
		cardType,
		fields,
		onClose,
	});

	const parsedTopics = formData.topics
		?.split(',')
		.map((t) => t.trim())
		.filter(Boolean);

	const previewCard: CardType = {
		...(formData as CardType),
		topics: parsedTopics,
		variant: 'preview',
	};

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

				<ModalField>
					<p>Layout:</p>
					<select name="layout" value={formData.layout} onChange={handleChange}>
						<option value="normal">Normal</option>
						<option value="compact">Compact</option>
						<option value="wide">Wide</option>
					</select>
				</ModalField>

				<ModalField>
					<p>Orientation:</p>
					<select name="orientation" value={formData.orientation} onChange={handleChange}>
						<option value="vertical">Vertical</option>
						<option value="horizontal">Horizontal</option>
						<option value="reversed">Reversed</option>
					</select>
				</ModalField>

				<ButtonGroup>
					<Button type="submit">{mode === 'add' ? 'Add' : 'Save'}</Button>
					<Button type="button" style={{background: '#ccc', color: '#222'}} onClick={onClose}>
						Cancel
					</Button>
				</ButtonGroup>
			</StyledForm>

			<div style={{marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #ddd'}}>
				<p style={{fontWeight: 600, marginBottom: '10px'}}>Live Preview:</p>
				<div style={{maxHeight: '300px', overflowY: 'auto'}}>
					<Card card={previewCard} layout={formData.layout} orientation={formData.orientation} variant="preview" />
				</div>
			</div>
		</>
	);
};

export default ModalForm;
